package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByCustomerId(Integer customerId);
    @Query("SELECT o FROM Order o JOIN FETCH o.staff WHERE o.staff.id = :staffId")
    List<Order> findByStaffId(@Param("staffId") Integer staffId);

}
