package org.example.backend.user.model;

import lombok.Data;
import org.example.backend.models.timeSettingsModel;

import java.util.UUID;

@Data
public class userModel {

    private UUID id;
    private String username;
    private String email;
    private String password;

    private String[] roles;
    private timeSettingsModel timeSettings;

}
