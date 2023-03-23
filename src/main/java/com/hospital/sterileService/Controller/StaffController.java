package com.hospital.sterileService.Controller;

import com.hospital.sterileService.Model.Staff;
import com.hospital.sterileService.Service.StaffServiceInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/staff")
public class StaffController {

    private StaffServiceInterface staffServiceInterface;

    public StaffController(StaffServiceInterface staffServiceInterface) {
        this.staffServiceInterface = staffServiceInterface;
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional> getStaff(@PathVariable("id") Integer id) {
        return new ResponseEntity<Optional>(staffServiceInterface.getStaff(id), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Staff>> getAllStaff() {
        return new ResponseEntity<List<Staff>>(staffServiceInterface.getAllStaff(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Staff> setStaff(@RequestBody Staff staff) {
        return new ResponseEntity<Staff>(staffServiceInterface.setStaff(staff), HttpStatus.CREATED);
    }
}