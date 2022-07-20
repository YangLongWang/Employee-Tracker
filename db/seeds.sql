INSERT INTO department (name)
VALUE
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUE
    ('Sales Lead', '100000', 1),
    ('Salesperson', '80000', 1),
    ('Lead Engineer', '150000', 2),
    ('Software Engineer', '120000', 2),
    ('Account Manager', '160000', 3),
    ('Accountant', '125000', 3),
    ('Legal Team Lead', '250000', 4),
    ('Lawyer', '190000', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE
    ('Ronald', 'Firbank', 1, null),
    ('Virginia', 'Woolf', 2, 1),
    ('Piers', 'Gaveston', 3, null),
    ('Charles', 'LeRoi', 4, 3),
    ('Katherine', 'Mansfield', 5, null),
    ('Dora', 'Carrington', 6, 5),
    ('Edward', 'Bellamy', 7, null),
    ('Montague', 'Summers', 8, 7);