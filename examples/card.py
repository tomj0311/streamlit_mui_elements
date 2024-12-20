import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from streamlit_mui_elements import mui, elements
import streamlit as st

def card_component():
    with elements("key2"):
        with mui.Grid(container=True, spacing=2):
            for _ in range(4):
                with mui.Grid(item=True, xs=12, sm=6, md=3):
                    with mui.Card(
                        sx={
                            "display": "flex",
                            "flexDirection": "column",
                            "borderRadius": 3,
                            "overflow": "hidden",
                        },
                        elevation=1
                    ):
                        mui.CardHeader(
                            title="Shrimp and Chorizo Paella",
                            subheader="September 14, 2016",
                            avatar=mui.Avatar("R", sx={"bgcolor": "red"}),
                            action=mui.IconButton(mui.icon.MoreVert),
                        )
                        mui.CardMedia(
                            component="img",
                            height=194,
                            image="https://mui.com/static/images/cards/paella.jpg",
                            alt="Paella dish",
                        )
                        with mui.CardContent(sx={"flex": 1}):
                            mui.Typography(
                                "This impressive paella is a perfect party dish and a fun meal to cook together "
                                "with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                            )

if __name__ == "__main__":
    card_component()
