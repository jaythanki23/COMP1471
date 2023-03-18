package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.InstrumentCount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstrumentCountRepository extends JpaRepository<InstrumentCount, Integer> {
}
