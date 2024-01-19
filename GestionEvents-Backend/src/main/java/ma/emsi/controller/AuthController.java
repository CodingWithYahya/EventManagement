package ma.emsi.controller;

import jakarta.validation.Valid;
import ma.emsi.jwt.JwtUtils;
import ma.emsi.jwt.payload.requests.LoginRequest;
import ma.emsi.jwt.payload.requests.SignupRequest;
import ma.emsi.jwt.responses.MessageResponse;
import ma.emsi.jwt.responses.UserInfoResponse;
import ma.emsi.model.User;
import ma.emsi.repository.RoleRepository;
import ma.emsi.repository.UserRepository;
import ma.emsi.service.UserService;
import ma.emsi.servicelmpl.UserDetailsImpl;

import org.springframework.http.HttpHeaders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/gestion_events/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	UserService userService;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

		String role = userDetails.getAuthorities().stream().findFirst().map(GrantedAuthority::getAuthority).orElse("");

		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
				.body(new UserInfoResponse(userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(),
						userDetails.getNom(), userDetails.getPrenom(), role));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		try {
			User user = createUserFromSignupRequest(signUpRequest);
			userService.addUser(user, signUpRequest.getRoleName());
			return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
		}
	}

	@PostMapping("/signout")
	public ResponseEntity<?> logoutUser() {
		ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
				.body(new MessageResponse("You've been signed out!"));
	}

	private User createUserFromSignupRequest(SignupRequest signUpRequest) {
		String strRole = signUpRequest.getRoleName();
		return new User(signUpRequest.getNom(), signUpRequest.getPrenom(), signUpRequest.getTelephone(),
				signUpRequest.getEmail(), signUpRequest.getPassword(), signUpRequest.getUsername(), strRole);
	}

}
