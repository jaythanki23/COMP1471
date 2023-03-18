package com.hospital.sterileService.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "sterilisation_step")
public class SterilisationStep {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String stepName;

    public SterilisationStep() {
    }

    public SterilisationStep(Integer id, String stepName) {
        this.id = id;
        this.stepName = stepName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStepName() {
        return stepName;
    }

    public void setStepName(String stepName) {
        this.stepName = stepName;
    }
}
