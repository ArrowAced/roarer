import emojiPicker from "emoji-picker-element/i18n/en";
import { escape } from "./helpers";

export const en = {
  languageName: "English",
  roarer: "Roarer",
  routeHome: "Home",
  routeInbox: "Inbox",
  routeGroups: "Groups",
  routeUsers: "Users",
  routeSettings: "Settings",
  signOut: "Sign out",
  inDevelopmentMode: "You are currently in development mode.",
  loginHeader: "Log in to Roarer",
  loginUsername: "Username:",
  loginPassword: "Password:",
  loginSubmit: "Log in",
  loginSignUp: "Sign up",
  loginFail:
    "You couldn't be logged in. This may be because your token has been revoked. Do you want to try again?",
  loginSignoutConfirm: "Are you sure you want to sign out?",
  loadMore: "Load more",
  loadingMore: "Loading more...",
  onlineUsers: "Online users ({n})",
  enterPostPlaceholder: "Say something!",
  enterPostSend: "Send!",
  typingUsers: "Typing users:",
  online: "Online",
  noTypingUsers: "No one is currently typing.",
  discordBridgePost: "This post was created on the Discord server.",
  webhookBridgePost:
    "This post was created via a Webhook. These do not go through Meower's account system, anyone can create a message under any name.",
  splashBridgePost: "This post was created via Splash.",
  revoltBridgePost: "This post was created on the Revolt server.",
  deletePost: "Delete",
  editPost: "Edit",
  replyPost: "Reply",
  reportPost: "Report",
  cancelEditingPost: "Cancel",
  reloadPostButton: "Reload",
  deletePostConfirm: "Are you sure you want to delete this post?",
  reportReason: "Reason:",
  confirmReport:
    "Are you absolutely sure? You are reporting for the following reason:\n{reason}\n\nPost:\n{post}",
  reportSuccess: "Reported.",
  chatDM: "DM",
  chatSettings: "Settings",
  chatPeople: "People",
  renameChatFail: "Couldn't rename chat: {status}",
  addMemberChatFail: "Couldn't add member: {status}",
  removeMemberChatFail: "Couldn't remove member: {status}",
  leaveChatFail: "Couldn't leave chat: {status}",
  promoteChatFail: "Couldn't promote user: {status}",
  back: "Back",
  chatRename: "Rename",
  chatAddMember: "Add",
  chatOwner: "Owner",
  chatPromote: "Promote",
  chatRemove: "Remove",
  profileInformationFail: "Couldn't get profile information: {status}",
  configFail: "Couldn't update your profile: {errmsg}",
  configSuccess: "Updated your profile.",
  newPassword: "What do you want your new password to be?",
  oldPassword: "What is your current password?",
  passwordChangeFail: "Couldn't change your password: {errmsg}",
  alsoRevokeTokens: "Do you also want to revoke all tokens?",
  revokeTokensConfirm:
    "Are you sure? You'll have to sign in on every device again.",
  revokeTokensFail: "Couldn't revoke tokens: {errmsg}",
  deleteAccountConfirm:
    "Are you sure? There is ABSOLUTELY NO WAY to undo this. Your account will be PERMANENTLY deleted after 7 days.",
  deleteAccountPasswordPrompt:
    "Please enter your password to confirm deleting your account.",
  deleteAccountFail: "Couldn't delete account: {err}",
  usersSectionMe: "Me",
  usersMeQuote: "Quote:",
  usersMePfp: "Profile picture:",
  profilePictureAlt: "Profile picture #{n}",
  updateProfile: "Update profile",
  changePassword: "Change password",
  revokeTokens: "Revoke all tokens",
  revokeTokensInfo: "This will sign you out of all devices.",
  deleteAccount: "Delete account",
  deleteAccountInfo:
    "This will delete your account PERMANENTLY. There is NO way to undo this.",
  language: "Language",
  credits: "Credits",
  contributorsThanks: {
    start: "Thank you to all ",
    contributorsLink: "contributors",
    end: " who made this possible.",
  },
  mascotThanks: {
    start: "Special thanks to ",
    end: " for creating the (currently unnamed) mascot!",
  },
  blockUserConfirm:
    "Are you sure you want to block this user? You'll not be able to see their messages.",
  unblockUserConfirm: "Are you sure you want to unblock this user?",
  blockFailed: "Couldn't block: {status}",
  unblockFailed: "Couldn't unblock: {status}",
  username: "Username",
  userSearch: "Go",
  noUserPlaceholder: "Enter a user above to view their profile!",
  lastSeenUser: "Last seen {date}",
  banned: "Banned",
  accountCreated: "Account created: {date}",
  block: "Block",
  unblock: "Unblock",
  createChat: "Create",
  chatNickname: "Nickname",
  openDMFail: "Couldn't open DM: {status}",
  chatCreateFail: "Couldn't create chat: {status}",
  chatGetFail: "Couldn't get chats: {status}",
  disconnected: "You were disconnected. Clicking OK will reload the page.",
  myAccount: "My account",
  languageContributing: {
    start:
      "Do you speak one of these languages, or even one that isn't present here yet? If you want to see Roarer in your language, you can ",
    githubLink: "translate it on GitHub",
    end: "!",
  },
  editPostFail: "Couldn't edit post: {status}",
  loadMoreFail: "Couldnt load more: {status}",
  getPostsFail: "Couldn't get posts: {status}",
  getChatFail: "Couldn't get chat: {status}",
  message404:
    "This page couldn't be found. Click on one of the links above to get on a page that does exist!",
  permSysadmin: "Can do anything",
  permViewReports: "Can view reports",
  permEditReports: "Can edit reports",
  permViewNotes: "Can view user/post notes",
  permEditNotes: "Can create and edit user/post notes",
  permViewPosts: "Can view additional information on posts",
  permDeletePosts: "Can delete any post",
  permViewAlts: "Can view alternative accounts of users",
  permSendAlerts: "Can send alerts",
  permKickUsers: "Can kick users from Meower",
  permClearUserQuotes: "Can clear the quotes of any user",
  permViewBanStates: "Can view the ban state of any user",
  permEditBanStates: "Can ban or unban any user",
  permDeleteUsers: "Can delete any user",
  permViewIPs: "Can view the IP address of any user",
  permBlockIPs: "Can block certain IP addresses from using Meower",
  permViewChats: "Can view any chat",
  permEditChats: "Can configure any chat",
  permSendAnnouncements: "Can send announcements",
  settingAnyImageHost:
    "Allow any image host, even outside of the standard whitelist.",
  settingAnyImageHostWarn:
    "WARNING: This will allow any website to be used as an image host, and a request will automatically be made to it. This might lead to your IP being shown to the website. Use this responsibly.",
  settingFilterSwears:
    'Filter out swear words of posts and replace them with "****".',
  settingEnterSends:
    "Send post on Enter. You can still create new lines by hitting Shift+Enter.",
  postFail: "Failed to send post: {status}",
  deletePostFail: "Failed to delete post: {status}",
  notoColorEmoji:
    "Emojis use the Noto Color Emoji font, licensed under the Open Font License.",
  chooseEmoji: "Choose an emoji",
  themeSettings: "Customize theme",
  themeInvalidJSON: "Invalid JSON",
  themeAccent: "Accent color",
  themeBackground: "Background color",
  themeForeground: "Foreground color",
  themeAccentForeground: "Foreground accent color",
  themeLink: "Link color",
  themePostStyle: "Post style",
  themePostStyleBordered: "Bordered",
  themePostStyleFilled: "Filled",
  themeCurrent: "Current theme",
  themeReset: "Reset theme",
  theme_light: "Light",
  theme_dark: "Dark",
  theme_stone: "Stone",
  theme_meower: "Meower",
  statsFail: "Failed to get stats: {status}",
  statsLoading: "Loading stats...",
  statsMessage:
    "There are {posts} posts, posted in home and {chats} other chats. {users} users contributed to that number!",
  statsDontSpam: "Don't spam just to make these numbers go up.",
  newDMToast: "New DM from {username}",
  newChatMessageToast: "New message in {chat} from {username}",
  chatActionAlt: "Go to this chat to view the message.",
  emojiPicker: escape(JSON.stringify(emojiPicker)),
  settingHideBlockedMentions:
    "Hide any message that mentions someone you've blocked.",
  blockedUsers:
    "You have currently blocked the following users. Click on any of them to open their profile. You can also unblock them from there.",
  reportHistory: "Report history",
  reportsLoading: "Loading reports...",
  reportsFail: "Couldn't load reports: {status}",
  reportHistoryPost: "Post",
  reportHistoryReason: "Reason",
  reportHistoryStatus: "Status",
  reportHistoryDate: "Time",
  reportHistoryDeletedPost: "Deleted post by {name}",
  reportHistoryKnownPost: "Post by {name}",
  reportHistoryUnknownPost: "Unknown post",
  reportHistory_pending: "Pending",
  reportHistory_action_taken: "Action taken",
  reportHistory_no_action_taken: "No action taken",
  reportUser: "Report",
  confirmUserReport:
    "Are you absolutely sure? You are reporting for the following reason:\n{reason}\n\nUser:\n{username}",
  reportHistoryUser: "User {username}",
  april1st2024Cl3Message:
    "> **Added by Roarer:**\n>Roarer has been updated not to use any of these commands. Your Roarer experience will not change. Thank you for using Roarer!\n\n",
  getPostFail: "Failed to get post: {status}",
  loadingPost: "Loading post...",
  backToHome: "Back to home",
  logIn: "Sign in",
  loginRequiredHeader: "Log in to use social features of Roarer",
  loginRequiredExplanation:
    "You can look around on Meower and use Roarer without logging in, but in order to use most social features, you'll have to log in.",
  loginRequiredCta:
    "If you want to create an account, you can do that below. This will create an account on Meower. If you already have an account on Meower, you don't need to do that - just log in with your preexisting account.",
  loginRequiredBack: {
    start: "If not, you can ",
    link: "go back to home",
    end: ". You'll always be able to log in via the link at the top of the page.",
  },
  themeColorScheme: "Color scheme",
  themeColorSchemeDark: "Dark",
  themeColorSchemeLight: "Light",
  emojiPickerTabEmoji: "Emoji",
  emojiPickerTabStickers: "Stickers",
  settingUseScratch2Blocks:
    "Use Scratch 2.0 style for Scratch blocks when the version is not specified.",
  download: "Download {fileName} ({contentType})",
  linkPost: "Post link",
  okButton: "Ok",
  cancelButton: "Cancel",
  yesButton: "Yes",
  noButton: "No",
  dialogTitle_alert: "Alert",
  dialogTitle_prompt: "Prompt",
  dialogTitle_confirm: "Confirm",
  reportReasonPlaceholder: "Report reason",
  newPasswordPlaceholder: "New password",
  oldPasswordPlaceholder: "Current password",
  deleteAccountPasswordPlaceholder: "Password",
  routeRelated: "More",
  livechat: "Livechat",
  livechatJoin: "{'@'}{username} joined the chat.",
  livechatLeave: "{'@'}{username} left the chat.",
  liveChatDescription:
    "Messages in here are not saved. Note that this doesn't stop 3rd parties (e.g. the Discord bridge) from logging messages.",
  uploadProfilePicture: "Upload profile picture",
  uploadTokenFail: "Failed to get token to upload: {status}",
  uploadTooLarge: "Your asset is too large. Please keep it at or under {size}.",
  uploadedPfp: "Uploaded profile picture",
  profilePictureCustomAlt: "Custom profile picture",
  settingShowPfps: "Show profile pictures in posts.",
  adminPost:
    "This was posted by a moderator. Go to their user page for further information.",
  linkGithub: "GitHub",
  themeLoadFail: "Failed to load theme.",
  closePost: "Close",
  usersMePfpColor: "Background color of custom profile picture:",
  usersMePfpColorNo: "None",
  externalSite:
    "Are you sure you want to leave Roarer and open {link}? It'll be opened in a new tab.",
  orSignUp: "...or sign up.",
  orLogIn: "...or log in.",
  loginConfirmPassword: "Confirm password",
  tosCheck: {
    start: "I have read and agree to ",
    link: "Meower's Terms of Service and Privacy Policy",
    end: ".",
  },
  cantSignUp_passwordMismatch: "The passwords don't match!",
  cantSignUp_noPassword: "Please provide a password!",
  cantSignUp_noUsername: "Please provide a username!",
  cantSignUp_noTos:
    "Please read and agree to the Terms of Service and Privacy Policy!",
  theme_meo: "Meo",
  themePresets: "Presets",
  syntaxInfo: "Syntax information",
  routeSyntax: "Post Syntax",
  syntax: "Syntax",
  syntaxMarkdown: {
    start:
      "You can use regular Markdown to create posts on here. Most features that aren't part of extensions are supported. Meower does make the change that new lines create actual new lines instead of continuing the paragraph. If you want to learn about markdown, ",
    link: "see this cheatsheet",
    end: ".",
  },
  syntaxExtensions:
    "However, both Meower and Roarer add some features to the syntax. All Roarer-specific Markdown will still look okay on other clients, so don't worry about using them.",
  syntaxAttachments: "Attachments",
  syntaxAttachmentsDescription:
    'You can write "[Image name: Image link]" to add attachments to your posts. No matter where you put them, they will automatically be put at the end of a post. This is a Meower feature that Roarer adopted. You can still use regular Markdown images using the "![Image name](Image link)" syntax if you prefer. Images have to be hosted on a whitelisted image host.',
  syntaxImageHosts: "Image hosts",
  syntaxSyntaxHighlighting: "Syntax highlighting",
  syntaxSyntaxHighlightingDescription:
    'Roarer supports syntax highlighting for code blocks, while Meower Svelte and most other clients don\'t. For users on those clients, the code block will simply appear unhighlighted. Roarer also supports adding syntax highlighting to inline code. To use this, you can write "(languageName) code". Users not on Roarer will see the language name in brackets.',
  syntaxScratchBlocks: "Scratch blocks",
  syntaxScratchBlocksDescription: {
    start:
      'You can use the special "scratch" language on code blocks to render Scratch blocks using the ',
    link: "scratchblocks",
    end: ' syntax. You can specify the version of Scratch to use by specifying "scratch2" or "scratch3", otherwise the user\'s preference will be used. People not using Roarer will see the scratchblocks syntax instead.',
  },
  settingConfirmExternalLinks: "Confirm before opening external links.",
  hi: "Hello there! :)",
  settingJoker: "I'm a joker",
  devDisconnect: "Disconnect",
  disconnectedDialog:
    "You were disconnected from Meower. Trying to reconnect...",
  confirmLeave:
    "Are you sure you want to leave this page? Your post draft will get lost.",
};
