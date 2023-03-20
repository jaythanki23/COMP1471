package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OperationRepository extends JpaRepository<Operation, Integer> {
    Operation findByTrayId(Integer trayId);
}