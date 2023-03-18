package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.SterilisationStep;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SterilisationStepRepository extends JpaRepository<SterilisationStep, Integer> {
}
