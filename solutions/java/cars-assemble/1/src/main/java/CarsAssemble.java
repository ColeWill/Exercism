public class CarsAssemble {
    int carsPerHour = 221;
    public double productionRatePerHour(int speed) {
        if(speed < 5){
            return speed * carsPerHour;
        } else if(speed < 9){
            return speed * 0.9 * carsPerHour;
        } else if(speed == 9){
            return speed * 0.8 * carsPerHour;
        } else {
            // speed is 10 or higher
            return speed * 0.77 * carsPerHour;
        }
    }

    public int workingItemsPerMinute(int speed) {
          double rateInMin = productionRatePerHour(speed)/60;
        int productionRateMinInt = (int) rateInMin;
        
        return productionRateMinInt;
   
    }
}
