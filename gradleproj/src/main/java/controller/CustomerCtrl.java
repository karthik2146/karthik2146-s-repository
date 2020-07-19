package controller;

import dto.Customer;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/customer")
public class CustomerCtrl {

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Customer getCustomer(@PathVariable(value = "id") Integer id) {
        Customer customer = new Customer(id, "karthik");
        return customer;
    }

    @GetMapping(path = "/{id}/details")
    public Customer getCustomerDetails(@PathVariable(value = "id") Integer id, @RequestParam(value = "inclAddr", defaultValue = "false") boolean inclAddress) {
        Customer customer = new Customer(id, "karthik");
        if (inclAddress) {
            customer.setAddress("Porur");
        }
        return customer;
    }

    @PostMapping(path = "/{id}")
    public Customer postCustomerDetails(@RequestBody() Customer customer) {
        return customer;
    }
}
