﻿<%--current we are using this page (complexebookappsfinalcart.aspx) instead of complexebookappscart.aspx because complexebookappfinalcart.aspx can have the reperated structure.--%>



<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="complexebookappsfinalcart.aspx.cs" Inherits="eBooks2goV5.ebookapps.complexebookappsfinalcart" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head id="Head1" runat="server">
    <title></title>
    <style>
        #tabEbook, #tabEbook1 {
            font-family: Verdana, Geneva, sans-serif;
            font-size: 0.8em;
            color: #5a5a5a;
            margin-left: -10px;
        }

            #tabEbook td, th, #tabEbook1 td, th {
                padding: 0.5em;
            }

            #tabEbook th, #tabEbook1 th {
                background-color: #aaaaaa;
                color: #fff;
                font-size: 12px;
            }

        .tabHeads {
            color: ##68b026;
            font-size: 20px;
            line-height: 40px;
            margin-left: 2px;
        }

        .subHeads {
            text-align: right;
            color: #999;
        }

        .cartHold {
            display: inline-block;
            float: left;
        }

            .cartHold img {
                display: inline-block;
                width: 50px;
                height: auto;
            }

        .productHold {
            display: inline-block;
            margin-left: 10px;
            color: #ff0000;
        }

        #tabEbook > table, #tabEbook1 > table {
            border: 0;
        }

        .eb2g_Additonaloption_cart {
            font-family: Trebuchet MS;
            color: #68b026;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 10px;
            column-span: all;
        }

        .ebook_aligncenter {
            color: #000;
        }
    </style>
    <link href='http://fonts.googleapis.com/css?family=Arimo' rel='stylesheet' type='text/css'>
</head>

<body>
    <form id="form1" runat="server">
        <div>
            <table id="tabEbook1" width="1000" border="1" bordercolor="#E1E1E1" cellspacing="0" cellpadding="0">
                <tr>
                    <td colspan="5" scope="col">
                        <table width="100%" border="0" cellspacing="0" cellpadding="5">
                            <tr>
                                <td width="45%" valign="bottom">
                                    <img src="images/scart.png" width="40" height="30" alt="shoping cart" />CART ID: <span style="color: #ff0000">
                                        <asp:Label ID="lblcomplexebookappscartid" runat="server"></asp:Label></span></td>
                                <td width="55%" valign="bottom">title:&nbsp;&nbsp;&nbsp;: <span class="ProductHold">
                                    <asp:Label ID="lblcomplexebookappstitle" runat="server"></asp:Label></span>
                                </td>
                            </tr>
                            <tr>
                                <td width="45%" valign="bottom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Product: <span class="productHold">
                                    <asp:Label ID="lblcomplexebookappsproduct" runat="server"></asp:Label></span></td>
                                <td width="55%" valign="bottom">Author: <span class="productHold">
                                    <asp:Label ID="lblcomplexebookappsauthor" runat="server"></asp:Label></span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Cost (USD)</th>
                    <th scope="col">Total Cost(USD)</th>
                </tr>
                <asp:Repeater ID="rptParent" runat="server" OnItemDataBound="rptParent_ItemDataBound">
                    <ItemTemplate>
                        <tr>
                            <td>
                                <asp:Label ID="lblSerialNo" runat="server" Text='<%# Eval("serialNo") %>'></asp:Label></td>
                            <td class="<%# getCSS(Eval("productid"))%>" colspan="<%# getStatus(Eval("productid"))%>"><%# Eval("productname") %></td>
                            <asp:Panel ID="pnlqty" Visible='<%# enablevisible(Eval("productid"))%>' runat="server">
                                <td align="center">

                                    <asp:Label ID="lblcomplexebookappsipadquantity" runat="server"><%# Eval("qty") %></asp:Label>
                                </td>
                                <td align="center">

                                    <asp:Label ID="lblcomplexebookappsipadunitcost" runat="server"><%# Eval("unitcost") %></asp:Label>
                                </td>
                                <td align="center">

                                    <asp:Label ID="lblcomplexebookappsipadtotalcost" runat="server"><%# Eval("totalcost") %></asp:Label>
                                    <asp:HiddenField ID="hdnproductId" runat="server" Value='<%# Eval("productid") %>' />
                                </td>
                            </asp:Panel>
                        </tr>
                        <asp:Repeater ID="rptChild" runat="server">
                            <ItemTemplate>
                                <tr>
                                    <td class="subHeads"><%# Eval("alphaserial") %>.</td>
                                    <td><%# Eval("productname") %></td>
                                    <td align="center">

                                        <asp:Label ID="lblcomplexebookappscustpagesquantity" runat="server"><%# Eval("qty") %></asp:Label>
                                    </td>
                                    <td align="center">

                                        <asp:Label ID="lblcomplexebookappscustpagesunitcost" runat="server"><%# Eval("unitcost") %></asp:Label>
                                    </td>
                                    <td align="center">

                                        <asp:Label ID="lblcomplexebookappscustpagestotalcost" runat="server"><%# Eval("totalcost") %></asp:Label>
                                    </td>
                                </tr>
                            </ItemTemplate>
                        </asp:Repeater>
                    </ItemTemplate>
                </asp:Repeater>

                <tr>
                    <td>&nbsp;</td>
                    <td colspan="3" align="right">Grand Total</td>
                    <td align="center">
                        <asp:Label ID="lblcomplexebookappsgrandtotal" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td colspan="3" align="right">Discount on Base package value @ 10% /20%...</td>
                    <td align="center">
                        <asp:Label ID="lblcomplexebookappsdiscountonbasepkg" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td colspan="3" align="right">Total - Discount</td>
                    <td align="center">
                        <asp:Label ID="lblcomplexebookappscartprice" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td colspan="3" align="right">Estimated product value</td>
                    <td align="center">
                        <asp:Label ID="lblcomplexebookappsestimatedproductvalue" runat="server"></asp:Label></td>
                </tr>

                <tr>
                    <td colspan="5" align="right">
                        <asp:ImageButton ID="Imgbtnback" runat="server" ImageUrl="../images/btnBack.jpg"
                            PostBackUrl="~/ebooks2gov5/ebookapps/flupload.aspx?ID=4" />
                        &nbsp; &nbsp;
                        <asp:ImageButton ID="imgbtncheckout" runat="server" ImageUrl="~/ebooks2gov5/images/checkout_btn.jpg"   OnClick="imgbtncheckout_Click" />
                        <%--<img src="images/checkout_btn.jpg" width="117" height="30" alt="check out" />--%></td>
                </tr>

            </table>
        </div>

         <%--jquery dialog start--%>
           <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/jquery-ui.js" type="text/javascript"></script>
    <%--<link href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.9/themes/start/jquery-ui.css"    rel="stylesheet" type="text/css" />--%>

        <link href="../signin/css/jquery-ui.css" rel="stylesheet" />
    <div>
     <script type="text/javascript">
         $(document).ready(function () {
             if ($('#hdnsigninvalue').val() == '1') {
                 $("#modal_dialog").dialog({
                     title: "signin",
                     //align: center,
                     minWidth: 400,
                     position: ['center', 100],
                     modal: true
                 });
                 return false;
             }
         });
    </script>
        
    <div id="modal_dialog" style="display: none;height:320px; width:800px;">
        <iframe id="Iframe2" runat="server" src="../../ebooks2gov5/signin/signin.aspx?ID=4" style="height:320px; width:380px;" noresize="noresize" frameborder="0" scrolling="no" border="0" />
    </div>
        <asp:HiddenField Value="0" ID="hdnsigninvalue" runat="server" />
    </div>
        <%--jquery dialog complete--%>

    </form>
</body>

</html>
