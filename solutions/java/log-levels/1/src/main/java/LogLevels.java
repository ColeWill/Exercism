public class LogLevels {
    private static String structureMessage (String input) {
        int whiteSpaceIndex = input.indexOf(" ");
        String stringRemainder = input.substring(whiteSpaceIndex + 1, input.length()).stripLeading().stripTrailing();

        return stringRemainder;
    }

    private static String logLevelLowerCase (String input){
        int begin = input.indexOf("[") + 1;
        int end = input.indexOf("]");

        String lowerCaseMessage = input.substring(begin, end).toLowerCase();
        return lowerCaseMessage;
    }
    
    public static String message(String logLine) {
        return structureMessage(logLine);
    }

    public static String logLevel(String logLine) {
        return logLevelLowerCase(logLine);
    }

    public static String reformat(String logLine) {
        String finalResult = structureMessage(logLine) + " (" + logLevelLowerCase(logLine) +")";

        return finalResult;
    }
}
