package otus.sn.api.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import otus.sn.api.data.entities.requests.Login.LoginRequest;

@Service
public class AuthenticationService {

    private final AuthenticationManager manager;

    public AuthenticationService(AuthenticationManager manager) {
        this.manager = manager;
    }

    public Authentication authenticate(LoginRequest request) throws AuthenticationException {
        Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(request.userId(), request.password());
        return manager.authenticate(authenticationRequest);
    }
}
