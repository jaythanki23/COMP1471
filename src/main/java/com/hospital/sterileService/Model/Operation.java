package com.hospital.sterileService.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "operation_table")
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer staff_id;

    private Integer patient_id;

    @OneToOne
    @JoinColumn(name = "tray_id",referencedColumnName = "id")
    private Tray tray;

    private Boolean success_status;

    @CreationTimestamp
    private Date creationDate;

}