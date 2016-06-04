"use strict;"
var Const = require('../Const.js');
var assert = require('assert');

describe('Const Test', function () {
    it('httpCodeSucceed', function () {
        assert.equal(Const.httpCodeSucceed, 200);
    });
    it('httpCodeFileNotFound', function () {
        assert.equal(Const.httpCodeFileNotFound, 404);
    });
    it('httpCodeSeverError', function () {
        assert.equal(Const.httpCodeSeverError, 500);
    });
    it('httpCodeAuthError', function () {
        assert.equal(Const.httpCodeAuthError, 503);
    });
    it('responsecodeSucceed', function () {
        assert.equal(Const.responsecodeSucceed, 1);
    });
    it('resCodeLoginNoName', function () {
        assert.equal(Const.resCodeLoginNoName, 1000001);
    });
    it('resCodeLoginNoRoomID', function () {
        assert.equal(Const.resCodeLoginNoRoomID, 1000002);
    });
    it('resCodeLoginNoUserID', function () {
        assert.equal(Const.resCodeLoginNoUserID, 1000003);
    });
    it('resCodeUserListNoRoomID', function () {
        assert.equal(Const.resCodeUserListNoRoomID, 1000004);
    });
    it('resCodeMessageListNoRoomID', function () {
        assert.equal(Const.resCodeMessageListNoRoomID, 1000005);
    });
    it('resCodeMessageListNoLastMessageID', function () {
        assert.equal(Const.resCodeMessageListNoLastMessageID, 1000006);
    });
    it('resCodeSendMessageNoFile', function () {
        assert.equal(Const.resCodeSendMessageNoFile, 1000007);
    });
    it('resCodeSendMessageNoRoomID', function () {
        assert.equal(Const.resCodeSendMessageNoRoomID, 1000008);
    });
    it('resCodeSendMessageNoUserID', function () {
        assert.equal(Const.resCodeSendMessageNoUserID, 1000009);
    });
    it('resCodeSendMessageNoType', function () {
        assert.equal(Const.resCodeSendMessageNoType, 1000010);
    });
    it('resCodeFileUploadNoFile', function () {
        assert.equal(Const.resCodeFileUploadNoFile, 1000011);
    });
    it('resCodeSocketUnknownError', function () {
        assert.equal(Const.resCodeSocketUnknownError, 1000012);
    });
    it('resCodeSocketDeleteMessageNoUserID', function () {
        assert.equal(Const.resCodeSocketDeleteMessageNoUserID, 1000013);
    });
    it('resCodeSocketDeleteMessageNoMessageID', function () {
        assert.equal(Const.resCodeSocketDeleteMessageNoMessageID, 1000014);
    });
    it('resCodeSocketSendMessageNoRoomID', function () {
        assert.equal(Const.resCodeSocketSendMessageNoRoomID, 1000015);
    });
    it('resCodeSocketSendMessageNoUserId', function () {
        assert.equal(Const.resCodeSocketSendMessageNoUserId, 1000016);
    });
    it('resCodeSocketSendMessageNoType', function () {
        assert.equal(Const.resCodeSocketSendMessageNoType, 1000017);
    });
    it('resCodeSocketSendMessageNoMessage', function () {
        assert.equal(Const.resCodeSocketSendMessageNoMessage, 1000018);
    });
    it('resCodeSocketSendMessageNoLocation', function () {
        assert.equal(Const.resCodeSocketSendMessageNoLocation, 1000019);
    });
    it('resCodeSocketSendMessageFail', function () {
        assert.equal(Const.resCodeSocketSendMessageFail, 1000020);
    });
    it('resCodeSocketTypingNoUserID', function () {
        assert.equal(Const.resCodeSocketTypingNoUserID, 1000021);
    });
    it('resCodeSocketTypingNoRoomID', function () {
        assert.equal(Const.resCodeSocketTypingNoRoomID, 1000022);
    });
    it('resCodeSocketTypingNoType', function () {
        assert.equal(Const.resCodeSocketTypingNoType, 1000023);
    });
    it('resCodeSocketTypingFaild', function () {
        assert.equal(Const.resCodeSocketTypingFaild, 1000024);
    });
    it('resCodeSocketLoginNoUserID', function () {
        assert.equal(Const.resCodeSocketLoginNoUserID, 1000025);
    });
    it('resCodeSocketLoginNoRoomID', function () {
        assert.equal(Const.resCodeSocketLoginNoRoomID, 1000026);
    });
    it('resCodeTokenError', function () {
        assert.equal(Const.resCodeTokenError, 1000027);
    });
    it('resCodeStickerListFailed', function () {
        assert.equal(Const.resCodeStickerListFailed, 1000028);
    });
    it('responsecodeParamError', function () {
        assert.equal(Const.responsecodeParamError, 2001);
    });
    it('responsecodeTokenError', function () {
        assert.equal(Const.responsecodeTokenError, 2100);
    });
    it('messageTypeText', function () {
        assert.equal(Const.messageTypeText, 1);
    });
    it('messageTypeFile', function () {
        assert.equal(Const.messageTypeFile, 2);
    });
    it('messageTypeLocation', function () {
        assert.equal(Const.messageTypeLocation, 3);
    });
    it('messageTypeContact', function () {
        assert.equal(Const.messageTypeContact, 4);
    });
    it('messageTypeSticker', function () {
        assert.equal(Const.messageTypeSticker, 5);
    });
    it('messageNewUser', function () {
        assert.equal(Const.messageNewUser, 1000);
    });
    it('messageUserLeave', function () {
        assert.equal(Const.messageUserLeave, 1001);
    });
    it('typingOn', function () {
        assert.equal(Const.typingOn, 1);
    });
    it('typingOff', function () {
        assert.equal(Const.typingOff, 0);
    });
    it('pagingLimit', function () {
        assert.equal(Const.pagingLimit, 50);
    });
    it('notificationSendMessage', function () {
        assert.equal(Const.notificationSendMessage, "SendMessage");
    });
    it('notificationNewUser', function () {
        assert.equal(Const.notificationNewUser, "NewUser");
    });
    it('notificationUserTyping', function () {
        assert.equal(Const.notificationUserTyping, "UserTyping");
    });
    it('notificationMessageChanges', function () {
        assert.equal(Const.notificationMessageChanges, "MessageChanges");
    });
});