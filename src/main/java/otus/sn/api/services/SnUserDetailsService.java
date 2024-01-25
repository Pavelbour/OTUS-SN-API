package otus.sn.api.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import otus.sn.api.data.entities.SecurityUser;
import otus.sn.api.data.repositories.UserRepository;

@Service
public class SnUserDetailsService implements UserDetailsService{

    private final UserRepository repository;

    public SnUserDetailsService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        return repository
                .findById(id)
                .map(SecurityUser::new)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found: " + id));
    }    
}
