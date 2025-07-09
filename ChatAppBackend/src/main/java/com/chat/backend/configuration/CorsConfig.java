package com.chat.backend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class CorsConfig {
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*") // Or use your exact IP:port
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
