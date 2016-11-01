function Contact(id, firstName, lastName, address, phone) {
    this.id = id || uuid.v4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
}