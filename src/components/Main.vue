<template>
  <div class="container mx-auto mt-5 p-5">
    <h2 class="text-2xl font-bold mb-5">Chat with Botpress AI</h2>

    <!-- Display bot message -->
    <div v-if="botMessage" class="mb-5">
      <div class="p-3 bg-gray-200 rounded-md">{{ botMessage }}</div>
    </div>

    <!-- User input -->
    <div class="mb-5">
      <input
        v-model="userInput"
        type="text"
        placeholder="Type your message here..."
        class="w-full p-3 border rounded-md"
        @keydown.enter="handleUserInput"
        :disabled="isWaitingForBotResponse"
      />
    </div>

    <!-- Send button -->
    <div>
      <button
        @click="handleUserInput"
        class="bg-blue-500 text-white py-2 px-5 rounded-md"
        :disabled="isWaitingForBotResponse"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
import { Client } from "@botpress/chat";

const clientId = "18a02620-4a4c-47d3-8062-ef73f31daa88"; // Your Botpress Client ID

export default {
  data() {
    return {
      userInput: "", // stores user's current message
      botMessage: "", // stores the bot's latest response
      conversationId: null, // stores the current conversation ID
      key: null, // stores the user key from Botpress
      client: null, // Botpress client instance
      isWaitingForBotResponse: false, // flag to track if bot response is pending
    };
  },
  async mounted() {
    // Start conversation when component is mounted
    await this.startConversation();
  },
  methods: {
    // Initialize Botpress client and start a new conversation
    async startConversation() {
      try {
        this.client = new Client({ apiUrl: `https://chat.botpress.cloud/${clientId}` });

        // Create a new user and get the user key
        const { user, key } = await this.client.createUser({});
        this.key = key;

        console.log(`User Id: ${user.id}`);

        // Start a new conversation
        const { conversation } = await this.client.createConversation({
          "x-user-key": key,
        });
        this.conversationId = conversation.id;

        console.log(`Conversation Id: ${this.conversationId}`);

        // Send the initial message to the bot
        await this.sendMessageToBot("Hello! Let's start the conversation.");
      } catch (error) {
        console.error("Error starting conversation:", error);
      }
    },

    // Send a message to the bot
    async sendMessageToBot(message) {
      try {
        this.isWaitingForBotResponse = true; // Lock input

        const { message: botMessage } = await this.client.createMessage({
          payload: { type: "text", text: message },
          "x-user-key": this.key, // Include the user key
          conversationId: this.conversationId,
        });

        console.log("Bot Response:", botMessage);

        // Check if the response has a payload and is of type text
        if (botMessage && botMessage.payload) {
          if (botMessage.payload.type === "text") {
            this.botMessage = botMessage.payload.text; // Set the bot message
          } else {
            console.warn("Unexpected message type:", botMessage.payload.type);
          }
        } else {
          console.warn("Bot response format is unexpected:", botMessage);
        }

        this.isWaitingForBotResponse = false; // Unlock input after receiving the response
      } catch (error) {
        console.error("Error sending message to bot:", error);
        this.isWaitingForBotResponse = false; // Unlock input in case of error
      }
    },

    // Handle user input and send it to the bot
    async handleUserInput() {
      if (!this.userInput || this.isWaitingForBotResponse) return;

      const message = this.userInput;

      // Clear the input field
      this.userInput = "";

      // Send the user message to the bot
      await this.sendMessageToBot(message);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
