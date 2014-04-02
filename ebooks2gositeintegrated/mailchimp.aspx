<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="mailchimp.aspx.cs" Inherits="ebooks2gov4.mailchimp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
    .Subscribe {background: none repeat scroll 0 0 #FFFFFF;border: 4px solid #E4E4E4;border-radius: 2px 2px 2px 2px;color: #111111;font: 400 12px/1.2 Arial,Helvetica,sans-serif;   padding: 7px 5px;transition: border-color 200ms ease 0s, outline 200ms ease-in 0s;width: 200px;}
    input[type="submit"] {font:13px/normal "Droid Sans", DroidSansWeb, "Segoe UI", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;color:#fff !important;text-decoration:none;padding:8px 15px 6px;display:inline-block;position:relative;z-index:2;border:none;border-radius:3px;cursor:pointer;background:#262626;box-shadow:0 10px 30px rgba(255, 255, 255, 0.14) inset, 0 0px 0 rgba(255, 255, 255, 0.2);-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}
    input[type="submit"]:hover {background:#163266;}
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:TextBox ID="txtmailchimp" placeholder="Enter your email address" CssClass="Subscribe" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredMail" runat="server" ControlToValidate="txtmailchimp" ValidationGroup="mailchimp" ErrorMessage="*"></asp:RequiredFieldValidator>
        <asp:RegularExpressionValidator ID="revEmail" runat="server" ValidationGroup="mailchimp"  ControlToValidate="txtmailchimp" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
               ErrorMessage="Please Enter Valid Email Address" Display="Dynamic" SetFocusOnError="true"></asp:RegularExpressionValidator>
        <asp:Button ID="btnchimpsubmit" runat="server" Text="Subscribe" ValidationGroup="mailchimp"
            onclick="btnchimpsubmit_Click" />
    </div>
    </form>
</body>
</html>
