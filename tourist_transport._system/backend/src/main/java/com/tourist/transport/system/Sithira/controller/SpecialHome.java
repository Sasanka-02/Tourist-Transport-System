package com.tourist.transport.system.Sithira.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpecialHome {

    @GetMapping("/{path:[^\\.]*}") // This maps all paths except those with a dot (like .css, .js)
    public String forward() {
        return "forward:/index.html"; // Serve the React app
    }
}
