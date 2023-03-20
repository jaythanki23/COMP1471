package com.hospital.sterileService.Model;

import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "sterilisation_process_table")
public class SterilisationProcess {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Timestamp
    private Date date;

    @ManyToOne
    @JoinColumn(name = "staff_id",referencedColumnName = "id")
    private Staff staff;

    private Integer sterilisation_machine_id;

    private Boolean isDone;

    @ManyToOne
    @JoinColumn(name = "tray_id",referencedColumnName = "id")
    private Tray tray;

    @ManyToOne
    @JoinColumn(name = "instrument_type_id",referencedColumnName = "id")
    private InstrumentType instrumentType;

    @CreationTimestamp
    private Date creationDate;

}