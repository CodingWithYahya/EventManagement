package ma.emsi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ma.emsi.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findById(int id);
	
	@Query("SELECT u FROM User u WHERE u.email = :email")
	User getUserByEmail(@Param("email") String email);

	Optional<User> findByEmailAndPassword(String email, String encodedPassword);

	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);


}
