package com.hospital.sterileService.Service;

import com.hospital.sterileService.Model.Operation;
import com.hospital.sterileService.Model.Staff;
import com.hospital.sterileService.Repository.StaffRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService implements StaffServiceInterface {

    private final StaffRepository staffRepository;

    public StaffService(StaffRepository staffRepository) {
        this.staffRepository = staffRepository;
    }


    @Override
    public Optional<Staff> getStaff(Integer staffId) {
        return this.staffRepository.findById(staffId);
    }

    @Override
    public List<Staff> getAllStaff() {
        return this.staffRepository.findAll();
    }

    @Override
    public Staff setStaff(Staff staff) {
        return this.staffRepository.save(staff);
    }
}