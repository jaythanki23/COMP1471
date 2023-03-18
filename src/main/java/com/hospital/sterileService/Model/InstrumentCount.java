package com.hospital.sterileService.Model;

import jakarta.persistence.*;
import org.springframework.web.service.annotation.GetExchange;

@Entity
@Table(name = "instrument_count")
public class InstrumentCount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Tray tray;

    @ManyToOne
    private InstrumentType instrumentType;

    private Integer instrumentCount;

    public InstrumentCount() {
    }

    public InstrumentCount(Integer id, Tray tray, InstrumentType instrumentType, Integer instrumentCount) {
        this.id = id;
        this.tray = tray;
        this.instrumentType = instrumentType;
        this.instrumentCount = instrumentCount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Integer getInstrumentCount() {
        return instrumentCount;
    }

    public void setInstrumentCount(Integer instrumentCount) {
        this.instrumentCount = instrumentCount;
    }
}
