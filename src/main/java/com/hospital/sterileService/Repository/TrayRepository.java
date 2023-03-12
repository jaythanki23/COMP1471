package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.Order;
import com.hospital.sterileService.Model.Tray;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrayRepository extends JpaRepository<Tray, Integer> {
    List<Tray> findByOrderId(Integer orderId);
}
