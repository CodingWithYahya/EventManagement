package ma.emsi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.emsi.model.MotifRejet;

@Repository
public interface MotifRejetRepository extends JpaRepository<MotifRejet, Integer> {

}
