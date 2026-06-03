class AnnalynsInfiltration {
    // boolean knightIsAwake = true;
    public static boolean canFastAttack(boolean knightIsAwake) {
        return !knightIsAwake;
    }

    public static boolean canSpy(boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake) {
        return knightIsAwake || archerIsAwake || prisonerIsAwake;
    }

    public static boolean canSignalPrisoner(boolean archerIsAwake, boolean prisonerIsAwake) {
        return prisonerIsAwake && !archerIsAwake;
    }

    public static boolean canFreePrisoner(boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake, boolean petDogIsPresent) {
        // dog is present and archer is asleep -> true
         // no dog, knight && archer asleep, prisoner awake --> true
        return (petDogIsPresent && !archerIsAwake) || ((!knightIsAwake && !archerIsAwake && !petDogIsPresent) && prisonerIsAwake) || false;
    }    
}
