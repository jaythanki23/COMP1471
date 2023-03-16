package com.hospital.sterileService.repository;

import com.hospital.sterileService.entity.OrderDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderDTO,Long> {
}
