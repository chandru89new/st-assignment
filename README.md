### Steps:

#### To run the static version:

1. Download the `chandru-assignment.zip` file
2. Unzip
3. Open `index.html`

#### To serve / build the app:

1. Clone repo
2. `yarn`
3. `yarn serve` (or `yarn build` and then deploy or serve the built file directly)

#### To test the `user = internal-123` thing:

1. Run the static version OR the app (When you do this the first time, you should see errors in console due to POSTing to http://example.com)
2. Go to Local Storage in Dev Tools.
3. Find `user` key and change it to `internal-123`
4. Refresh the app. (Now, in your console, you should see output `{ eventName: string, metaData: object }`)
