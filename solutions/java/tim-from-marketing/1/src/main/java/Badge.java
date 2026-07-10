class Badge {
    public String print(Integer id, String name, String department) {
        String badgeId = (id != null) ? "[" + id + "] - " : ""; 
        String departmentName = (department != null) ? department.toUpperCase() : "OWNER";
        String result =  badgeId + name + " - " + departmentName;
        
        return result;
    }
}
