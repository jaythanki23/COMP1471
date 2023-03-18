package com.hospital.sterileService.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "instrument_type")
public class InstrumentType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String instrumentName;

    @ManyToOne
    private SterilisationStep step;

    public InstrumentType() {
    }

    public InstrumentType(Integer id, String instrumentName, SterilisationStep step) {
        this.id = id;
        this.instrumentName = instrumentName;
        this.step = step;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getInstrumentName() {
        return instrumentName;
    }

    public void setInstrumentName(String instrumentName) {
        this.instrumentName = instrumentName;
    }

    public SterilisationStep getStep() {
        return step;
    }

    public void setStep(SterilisationStep step) {
        this.step = step;
    }


}
