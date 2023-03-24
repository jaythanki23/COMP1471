package com.hospital.sterileService.Model;

import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "sterilisation_process_table")
public class SterilisationProcess {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Timestamp
    private Date date;

    private Integer sterilisation_machine_id;

    @Column(columnDefinition = "boolean default false")
    private Boolean isDone = false;

    @ManyToOne
    @JoinColumn(name = "tray_id",referencedColumnName = "id")
    private Tray tray;

    @ManyToOne
    @JoinColumn(name = "instrument_type_id",referencedColumnName = "id")
    private InstrumentType instrumentType;

    @CreationTimestamp
    private Date creationDate;

    public SterilisationProcess() {
    }

    public SterilisationProcess(Integer id, Date date, Integer sterilisation_machine_id, Boolean isDone, Tray tray, InstrumentType instrumentType, Date creationDate) {
        this.id = id;
        this.date = date;
        this.sterilisation_machine_id = sterilisation_machine_id;
        this.isDone = isDone;
        this.tray = tray;
        this.instrumentType = instrumentType;
        this.creationDate = creationDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getSterilisation_machine_id() {
        return sterilisation_machine_id;
    }

    public void setSterilisation_machine_id(Integer sterilisation_machine_id) {
        this.sterilisation_machine_id = sterilisation_machine_id;
    }

    public Boolean getDone() {
        return isDone;
    }

    public void setDone(Boolean done) {
        isDone = done;
    }

    public Tray getTray() {
        return tray;
    }

    public void setTray(Tray tray) {
        this.tray = tray;
    }

    public InstrumentType getInstrumentType() {
        return instrumentType;
    }

    public void setInstrumentType(InstrumentType instrumentType) {
        this.instrumentType = instrumentType;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}