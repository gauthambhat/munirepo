<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BkpNewContactUs.aspx.cs" Inherits="ebooks2gov4.BkpNewContactUs" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>eBooks2Go :: Contact Us</title>
    <link href="theme/default/css/style.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="theme/default/css/nivo-slider.css" type="text/css" media="screen" />

    <script type="text/javascript" src="theme/default/js/DD_roundies.js"></script>

    <script type="text/javascript" src="theme/default/js/AC_RunActiveContent.js"></script>

    <script type="text/javascript" src="theme/default/js/jquery-1.4.3.min.js"></script>

    <script src="theme/default/js/menu.js" type="text/javascript" language="javascript1.2"></script>

    <link href="theme/default/css/news_jquery.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="theme/default/js/news_jquery.js"></script>

    <link rel="stylesheet" href="fonts.css" type="text/css" charset="utf-8" />

    <script type="text/javascript" src="JS/jquery.min.js"></script>

    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-23816619-1']);
        _gaq.push(['_trackPageview']);
        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>

    <style type="text/css">
        .style1
        {
            font-size: 14px;
            color: #000000;
        }
    </style>
</head>
<body>
    <form id="newfrmContactUs" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td class="text1">
                                        <table width="100%" border="0" cellspacing="2" cellpadding="5" align="center" bgcolor="#f4f4f4" height="500px"
                                            style="border: 1px solid #ddd;">
                                            <tr>
                                                <td height="35" colspan="3" class="heading_contact">
                                                    For General/Trade Enquiries:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <asp:Label ID="lblMessage" runat="server"></asp:Label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="34%">
                                                    <span class="text4">First Name:</span> <span class="text_contact_red">*</span>
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtFirstName" runat="server" MaxLength="25" class="textbox1_contactus"></asp:TextBox>
                                                     <asp:RequiredFieldValidator ID="rfvFirstName" runat="server" ValidationGroup="Register"
                    ControlToValidate="txtFirstName" ErrorMessage="Please Enter Name" Display="Dynamic"
                    SetFocusOnError="true"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="revFirstName" runat="server" ValidationGroup="Register"
                    ControlToValidate="txtFirstName" ValidationExpression="^([\S\s]{3,30})$" ErrorMessage="Name must be minimum 3 characters."
                    Display="Dynamic" SetFocusOnError="true"></asp:RegularExpressionValidator>
                <asp:RegularExpressionValidator ID="revFirstNameFormat" runat="server" ValidationGroup="Register"
                    ControlToValidate="txtFirstName" ValidationExpression="^[a-zA-Z 0-9._-]{3,30}$" ErrorMessage="Please Enter Valid Name"
                    Display="Dynamic" SetFocusOnError="true"></asp:RegularExpressionValidator>
                                                </td>
                                                <td align="left">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="34%">
                                                    <span class="text4">Last Name:</span> <span class="text_contact_red">* </span>
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtLastName" runat="server" MaxLength="25" class="textbox1_contactus"></asp:TextBox>
                                                </td>
                                                <td align="left">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                    <span class="text4">Email:</span> <span class="text_contact_red">*</span>
                                                </td>
                                                <td>
                                                    <asp:TextBox ID="txtEmail" runat="server" MaxLength="30" class="textbox1_contactus"></asp:TextBox>
                                                       <asp:RequiredFieldValidator ID="rfvEmail" runat="server" ValidationGroup="Register"
                    ControlToValidate="txtEmail" ErrorMessage="Please Enter Email" Display="Dynamic"
                    SetFocusOnError="true"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="revEmail" runat="server" ValidationGroup="Register"
                    ControlToValidate="txtEmail" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
                    ErrorMessage="Please Enter Valid Email Address" Display="Dynamic" SetFocusOnError="true"></asp:RegularExpressionValidator>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                    <span class="text4"></span><span class="text4">Phone:</span>
                                                </td>
                                                <td>
                                                    <asp:TextBox ID="txtPhone" runat="server" MaxLength="15" class="textbox1_contactus"></asp:TextBox>
                                                    <asp:FilteredTextBoxExtender ID="ftePhone" runat="server" TargetControlID="txtPhone"
                                                        FilterType="Custom" FilterMode="ValidChars" ValidChars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_()#">
                                                    </asp:FilteredTextBoxExtender>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="text4">Country:</span> <span class="text_contact_red">*</span>
                                                </td>
                                                <td>
                                                    <label>
                                                        <asp:DropDownList ID="ddlCountry" runat="server" CssClass="textbox1_contactus">
                                                        </asp:DropDownList>
                                                        <asp:RequiredFieldValidator ID="rfvCountry" runat="server" ControlToValidate="ddlCountry"
                    ErrorMessage="Select Country" Display="Dynamic" SetFocusOnError="true" ValidationGroup="Register"
                    InitialValue="0">
                </asp:RequiredFieldValidator>
                                                    </label>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" valign="top">
                                                    <span class="text4">Message: <span class="text_contact_red">*</span></span>
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtMessage" runat="server" CssClass="textbox1_contactus" TextMode="MultiLine"
                                                         Height="69px"></asp:TextBox>
                                                          <asp:RequiredFieldValidator ID="rfvMailingAddress1" runat="server" ValidationGroup="Register"
                    ControlToValidate="txtMessage" ErrorMessage="Please Enter Message" Display="Dynamic"
                    SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                </td>
                                                <td align="left">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="13">
                                                </td>
                                                <td width="59%" height="13" align="right">
                                                    <table>
                                                        <tr>
                                                            <td>
                                                               
                                                            </td>
                                                            <td>
                                                                <asp:Button ID="btnSubmit" Text="Submit"  ValidationGroup="Register" runat="server" class="submit_btn" OnClick="btnSubmit_Click" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="7%" align="left">
                                                </td>
                                            </tr>
                                        </table>
                            </td>
                        </tr>
                    </table>
    </form>
</body>
</html>
