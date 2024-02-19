package com.ukraininahouse.ukrainianhouse.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                // Настройка разрешений для запросов
                .authorizeRequests(authorize -> authorize
                        .anyRequest().permitAll() // Разрешить все запросы
                )
                // Отключение CSRF
                .csrf(csrf -> csrf
                        .disable()
                )
                // Отключение формы входа
                .formLogin(formLogin -> formLogin
                        .disable()
                );

        return httpSecurity.build();
//        httpSecurity
//                .authorizeRequests(auth -> auth
//                        .anyRequest().permitAll() // Разрешить все запросы без аутентификации
//                )
//                .csrf().disable() // Отключить CSRF защиту, если она вам не нужна
//                .formLogin().disable(); // Отключить форму входа
//        return http.build();
    }
}
