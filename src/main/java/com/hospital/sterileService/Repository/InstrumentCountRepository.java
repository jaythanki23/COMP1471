package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.InstrumentCount;
import com.hospital.sterileService.Model.TrayConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstrumentCountRepository extends JpaRepository<InstrumentCount, Integer> {
    List<InstrumentCount> findByTrayConfigurationId(Integer trayConfigId);
}
