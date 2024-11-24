package org.example.backend.models;

import lombok.Data;

@Data
public class timeSettingsModel {
    private int[] workDays;
    private int[] workTime; // in Minutes
    private int breakTime;


}
