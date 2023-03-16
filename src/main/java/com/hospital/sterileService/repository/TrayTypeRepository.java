package com.hospital.sterileService.repository;

import com.hospital.sterileService.entity.TrayTypeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrayTypeRepository extends JpaRepository<TrayTypeDTO, Long> {
}
