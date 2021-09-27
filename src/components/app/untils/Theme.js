const Color = {
  pure_white: "#ffffff",
  pure_black: "#000000",
  white_dark: "#dde2e6",
  light_white: "#f9f9f9",
  gray_dark: "#333333",
  black_gray: "#201e21",
  light_gray: "#dbdbdb",
  gray_pure_light: "#f5f5f5",
  gray: "#9a9a9a",

  dark_blue: "#394054",
  dark_blue_active: "#424b5e",
  white_blues: "#eff1f5",
  orange: "#30a2bb",

  transparent: "rgba(0,0,0,0)",
  gray_transparent: "rgba(86,86,86,0.9)",
};

export const Theme = {
  color: {
    primary: Color.dark_blue,
    primary_active: Color.dark_blue_active,
    action: Color.orange,
    disable: Color.light_gray,
  },

  global_layout: {
    content_background: Color.white_dark,
  },

  card: {
    background_color: Color.pure_white,
  },
  icons: {
    icon_button_bg: Color.transparent,
    icon_button_bg_hover: Color.transparent,
  },
  buttons: {
    negative_background: Color.pure_white,
    negative_background_hover: Color.pure_white,
    negative_color: Color.dark_blue,
    negative_color_hover: Color.orange,
  },

  form: {
    input_background: Color.pure_white,
    input_border: Color.light_gray,
    input_background_focus: Color.light_white,
    input_color: Color.black_gray,
    select_overlayer: Color.gray_transparent,
    ovelayer_modal_backgorund: Color.pure_white,
    font_color: Color.black_gray,
  },

  timeSelector: {
    header_color: Color.black_gray,
    dial_background: Color.gray_pure_light,
    dial_item_background_active: Color.pure_white,
    dial_item_color: Color.black_gray,
    dial_item_color_active: Color.pure_white,
    switch_backgorund_color: Color.pure_white,
    switch_color_active: Color.pure_white,
    switch_color: Color.black_gray,
  },
  calendar: {
    day_background_color: Color.gray_pure_light,
    empty_background_color: Color.pure_white,
    normal_color: Color.black_gray,
    active_color: Color.pure_white,
    border_color: Color.pure_white,
  },

 


  font: {
    s_size: "1.2rem",
    sm_size: "1.4rem",
    m_size: "1.6rem",
    ml_size: "2rem",
    l_size: "2.4rem",
    xl_size: "3.2rem",
    xxl_size: "4rem",
  },
  lineHeight: {
    s_size: "1.6rem",
    sm_size: "1.8rem",
    m_size: "2rem",
    l_size: "2.8rem",
    xl_size: "3.6rem",
  },
};
