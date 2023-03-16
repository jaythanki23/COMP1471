package com.hospital.sterileService.repository;

import com.hospital.sterileService.entity.TrayDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrayRepository extends JpaRepository<TrayDTO, Long> {

    @Query("SELECT b FROM TrayDTO b JOIN FETCH b.order WHERE b.order.order_Id = :orderId")
    List<TrayDTO> findByOrderId(@Param("orderId") Long orderId);
}
