package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.InstrumentType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstrumentTypeRepository extends JpaRepository<InstrumentType, Integer> {
}
