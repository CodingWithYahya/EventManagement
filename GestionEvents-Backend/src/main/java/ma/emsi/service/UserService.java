package ma.emsi.service;

import java.util.List;

import ma.emsi.model.User;

public interface UserService {

	public void create(User u);

	public void update(User u);

	public void delete(int id);

	public List<User> findAll();

	public User findById(int id);

	public void addUser(User user, String roleName);

}