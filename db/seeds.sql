INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, department_id, salary)
VALUES
    ('Sales Lead', 1, '100000'),
    ('Salesperson', 1, '80000'),
    ('Lead Engineer', 2, '150000'),
    ('Software Engineer', 2, '120000'),
    ('Account Manager', 3, '160000'),
    ('Accountant', 3, '125000'),
    ('Legal Team Lead', 4, '250000'),
    ('Lawyer', 4, '190000');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, null),
    ('Virginia', 'Woolf', 2, 1),
    ('Piers', 'Gaveston', 3, null),
    ('Charles', 'LeRoi', 4, 3),
    ('Katherine', 'Mansfield', 5, null),
    ('Dora', 'Carrington', 6, 5),
    ('Edward', 'Bellamy', 7, null),
    ('Montague', 'Summers', 8, 7);