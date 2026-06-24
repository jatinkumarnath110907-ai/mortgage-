package com.java;

import java.text.NumberFormat;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENT = 100;

        try (Scanner scanner = new Scanner(System.in)) {
            int principal = readInt(scanner, "Principal: ", 1_000, 1_000_000);
            float annualInterest = readFloat(scanner, "Annual Interest Rate: ", 1, 30);
            int years = readInt(scanner, "Period (Years): ", 1, 30);

            double monthlyInterest = annualInterest / PERCENT / MONTHS_IN_YEAR;
            int numberOfPayments = years * MONTHS_IN_YEAR;

            double mortgage = principal
                    * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                    / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

            String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
            System.out.println("Mortgage: " + mortgageFormatted);
        }
    }

    private static int readInt(Scanner scanner, String prompt, int min, int max) {
        while (true) {
            System.out.print(prompt);
            if (scanner.hasNextInt()) {
                int value = scanner.nextInt();
                scanner.nextLine();
                if (value >= min && value <= max) {
                    return value;
                }
            } else {
                scanner.nextLine();
            }
            System.out.printf("Enter a value between %d and %d%n", min, max);
        }
    }

    private static float readFloat(Scanner scanner, String prompt, float min, float max) {
        while (true) {
            System.out.print(prompt);
            if (scanner.hasNextFloat()) {
                float value = scanner.nextFloat();
                scanner.nextLine();
                if (value >= min && value <= max) {
                    return value;
                }
            } else {
                scanner.nextLine();
            }
            System.out.printf("Enter a value between %.0f and %.0f%n", min, max);
        }
    }
}
