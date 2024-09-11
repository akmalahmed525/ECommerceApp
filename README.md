# Shoe Bazaar (Coding Assignment)

# Prerequisites
You must follow the steps given in the [official documentation](https://reactnative.dev/docs/set-up-your-environment).

## Environments

- `Java openjdk 11.0.24 2024-07-16`
- `XCode 15.4`
- `Android Studio Koala | 2024.1.1`

## Used Devices
- `Nokia 5 4 - Android 12 (API 31)`
- `iPhone XR - iOS 17.6.1`

## Setup Instructions

1. Install ([Node Version Manager](https://github.com/nvm-sh/nvm)) `nvm` in your local machine.
2. Clone the repository from [Github](https://github.com/akmalahmed525/ECommerceApp).
3. Navigate to the repository and run the command below.
   ```sh
   nvm use .
   ```
4. Install the packages via the command below.
   ```sh
   yarn
   ```
5. Start the metro server via the command below.
   ```
   yarn start --reset-cache
   ```
6. Open a new terminal in the same directory and run either of the command below to install the development version of the application in your device.
   ```sh
   yarn android # for Android devices
   yarn ios # for iOS devices
   ```
7. Your App will be installed  
   
   iOS
   ---
   ![alt text](docs/image.png)

   Android
   ---
   ![alt text](docs/image-1.png)

8. To run the test cases, run the command below (written only for `Redux` and `Redux Saga` functions due to time constraints).
   ```sh
   yarn test --watch
   ```

   ![alt text](docs/image-test.png)

9. Screen Recording of iOS  
  
   [![iOS](./docs/thumbnail-ios.PNG)](https://youtu.be/ES4fyLz_Cko)

   [![Android](./docs/thumbnail-android.PNG)](https://youtu.be/jO0wkjApItw)
