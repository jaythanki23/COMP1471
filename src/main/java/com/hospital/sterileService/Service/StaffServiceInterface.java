package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Staff;

import java.util.List;
import java.util.Optional;

public interface StaffServiceInterface {

    Optional<Staff> getStaff(Integer staffId);

    List<Staff> getAllStaff();

    Staff setStaff(Staff operation);
}