<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="NewContactUs.aspx.cs" Inherits="ebooks2gov4.NewContactUs" %>

<%@ Register Assembly="MSCaptcha" Namespace="MSCaptcha" TagPrefix="cc1" %>
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
    <link href="css/contactus.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="JS/jquery.min.js"></script>
    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-23816619-1']);
        _gaq.push(['_trackPageview']);
        (function () {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
</head>
<body>
    <form id="newfrmContactUs" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <table width="100%" border="0"  cellspacing="0" cellpadding="0">
        <tr>
            <td class="text1">
                <table width="441" border="0" cellspacing="2" cellpadding="5" align="center" bgcolor="#f4f4f4"
                    height="500px" class="eb2g_contact">
                    <tr>
                        <td height="35" colspan="3">                            
                                <span class="leftmargin">For General/Trade Enquiries:</span>
                                
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                        <img src="images/contactus_lines.jpg" width="400" height="3" border="none" style="margin-left:10px;" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <asp:Label ID="lblMessage" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td width="100px">
                            <span class="text4">First&nbsp;Name</span>&nbsp;<span class="text_contact_red">*</span>
                        </td>
                        <td width="4%">
                            <span class="text4">:</span>
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
                                ControlToValidate="txtFirstName" ValidationExpression="^[a-zA-Z 0-9._-]{3,30}$"
                                ErrorMessage="Please Enter Valid Name" Display="Dynamic" SetFocusOnError="true"></asp:RegularExpressionValidator>
                        </td>
                        <td align="left">
                        </td>
                    </tr>
                    <tr>
                        <td width="34%">
                            <span class="text4">Last Name</span> <span class="text_contact_red">* </span>
                        </td>
                        <td width="4%">
                            <span class="text4">:</span>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtLastName" runat="server" MaxLength="25" class="textbox1_contactus"></asp:TextBox>
                        </td>
                        <td align="left">
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <span class="text4">Email</span> <span class="text_contact_red">*</span>
                        </td>
                        <td width="4%">
                            <span class="text4">:</span>
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
                            <span class="text4"></span><span class="text4">Phone</span>
                        </td>
                        <td width="4%">
                            <span class="text4">:</span>
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
                            <span class="text4">Country</span> <span class="text_contact_red">*</span>
                        </td>
                        <td width="4%">
                            <span class="text4">:</span>
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
                            <span class="text4">Message <span class="text_contact_red">*</span></span>
                        </td>
                        <td width="4%" valign="top">
                            <span class="text4" >:</span>
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtMessage" runat="server" CssClass="textbox1_contactus" TextMode="MultiLine"
                                Height="69px" Style="position: relative; top: -13px; left: 0px;"></asp:TextBox>
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
                        <td height="13">
                        </td>
                        <td width="59%" height="13" align="center">
                            
                                        <cc1:CaptchaControl ID="Captcha1" runat="server" CaptchaBackgroundNoise="Low" CaptchaLength="5"
                                            CaptchaHeight="60" CaptchaWidth="200" CaptchaLineNoise="None" CaptchaMinTimeout="5"
                                            CaptchaMaxTimeout="240" FontColor="#529E00" />
                                   
                        </td>
                        <td width="7%" align="left">
                        </td>
                    </tr>

                    <tr>
                        <td align="left" valign="top">
                            <span class="text4">&nbsp;</span>
                        </td>
                        <td align="left" valign="top">
                            <span class="text4">&nbsp;</span>
                        </td>

                       <td>
                                        <asp:TextBox ID="txtCaptcha" runat="server"></asp:TextBox>
                                         <asp:RequiredFieldValidator ID="RequiredFieldValidator1" ValidationGroup="Register" runat="server" ErrorMessage="*Required" ControlToValidate = "txtCaptcha"></asp:RequiredFieldValidator>
                                    </td>

                        <td align="left">
                        </td>
                    </tr>
                     <tr>
                        <td align="left" valign="top">
                            <span class="text4">Need Copy?</span>
                        </td>
                        <td align="left" valign="top">
                            <span class="text4">&nbsp;</span>
                        </td>

                       <td>
                           <asp:CheckBox ID="chkBxFeedback" runat="server" />
                                    </td>

                        <td align="left">
                        </td>
                    </tr>
                    <tr>
                        <td height="13">
                        </td>
                        <td height="13">
                        </td>
                        <td width="59%" height="13" align="center">
                            <table>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                        <asp:ImageButton ID="btnSubmit"  ImageUrl="images/submit_contac_btnt.png" ValidationGroup="Register" runat="server"
                                            class="submit_btn" OnClick="btnSubmit_Click" />
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
