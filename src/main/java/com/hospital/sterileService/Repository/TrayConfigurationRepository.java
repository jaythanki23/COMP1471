package com.hospital.sterileService.Repository;

import com.hospital.sterileService.Model.TrayConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrayConfigurationRepository extends JpaRepository<TrayConfiguration, Integer> {


}
