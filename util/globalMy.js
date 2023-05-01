// jsdom 对象
globalMy.jsdom_element = [];

// 存放一些东西
globalMy.memory = {
    supportedExtensions: ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth", "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB", "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc", "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context", "WEBKIT_WEBGL_lose_context", "WEBGL_multi_draw"],
}
// 存放触发事件函数
globalMy.memory.listeners = {};
globalMy.memory.begin_time = 0;

// 瑞数的
globalMy.memory.fontFamily_1 = ['mmllii', 'FangSongGB2312', 'KaiTiGB2312', 'Microsoft YaHei', 'Hiragino Sans GB', 'STHeiti Light', 'STHeiti', 'DFPhelvetica', 'Tibetan Machine Uni', 'Cooljazz', 'LG Smart_H test Regular', 'DINPro-light', 'Helvetica LT 43 Light Extended', 'HelveM_India', 'SECRobotoLight Bold', 'OR Mohanty Unicode Regular', 'Droid Sans Thai', 'Kannada Sangam MN', 'DDC Uchen', 'clock2016_v1.1', 'SamsungKannadaRegular', 'MI LANTING Bold', 'SamsungSansNum3L Light', 'HelveticaNeueThin', 'SECFallback', 'SamsungEmoji', 'Telugu Sangam MN', 'Carrois Gothic SC', 'Flyme Light Roboto Light', 'SoMA-Digit Light', 'SoMC Sans Regular', 'HYXiYuanJ', 'sst', 'samsung-sans-num4T', 'gm_mengmeng', 'Lohit Kannada', 'samsung-sans-num4L', 'serif-monospace', 'SamsungSansNum-3T Thin', 'ColorOSUI-XThin', 'Droid Naskh Shift Alt', 'SamsungTeluguRegular', 'Bengali OTS', 'MI LanTing_GB Outside YS', 'FZMiaoWu_GB18030', 'helve-neue-regular', 'SST Medium', 'Khmer Mondulkiri Bold', 'Helvetica LT 23 Ultra Light Extended', 'Helvetica LT 25 Ultra Light', 'Roboto Medium', 'Droid Sans Bold', 'goudy', 'sans-serif-condensed-light', 'SFinder', 'noto-sans-cjk-medium', 'miui', 'MRocky PRC Bold', 'AndroidClock Regular', 'SamsungSansNum-4L Light', 'sans-serif-thin', 'AaPangYaer', 'casual', 'BN MohantyOT Bold', 'x-sst', 'NotoSansMyanmarZawgyi', 'Helvetica LT 33 Thin Extended', 'AshleyScriptMT Alt', 'Noto Sans Devanagari UI', 'Roboto Condensed Bold', 'Roboto Medium Italic', 'miuiex', 'Noto Sans Gurmukhi UI', 'SST Vietnamese Light', 'LG_Oriya', 'hycoffee', 'x-sst-ultralight', 'DFHeiAW7-A', 'FZZWXBTOT_Unicode', 'Devanagari Sangam MN Bold', 'sans-serif-monospace', 'Padauk Book Bold', 'LG-FZYingBiKaiShu-S15-V2.2', 'LG-FZYingBiKaiShu-S15-V2.3', 'HelveticaNeueLT Pro 35 Th', 'SamsungSansFallback', 'SST Medium Italic', 'AndroidEmoji', 'SamsungSansNum-3R', 'ITC Stone Serif', 'sans-serif-smallcaps', 'x-sst-medium', 'LG_Sinhalese', 'Roboto Thin Italic', 'century-gothic', 'Clockopia', 'Luminous_Sans', 'Floridian Script Alt', 'Noto Sans Gurmukhi Bold', 'LTHYSZK Bold', 'GS_Thai', 'SamsungNeoNum_3T_2', 'Arabic', 'hans-sans-normal', 'Lohit Telugu', 'HYQiHei-50S Light', 'Lindsey for Samsung', 'AR Crystalhei DB', 'Samsung Sans Medium', 'samsung-sans-num45', 'hans-sans-bold', 'Luminous_Script', 'SST Condensed', 'SamsungDevanagariRegular', 'Anjal Malayalam MN', 'SamsungThai(test)', 'FZLanTingHei-M-GB18030', 'Hebrew OTS', 'GS45_Arab(AndroidOS)', 'Samsung Sans Light', 'Choco cooky', 'helve-neue-thin', 'PN MohantyOT Medium', 'LG-FZKaTong-M19-V2.4', 'Droid Serif', 'SamsungSinhalaRegular', 'Noto Sans Devanagari UI Bold', 'SST Light', 'DFPEmoji', 'weatherfontnew Regular', 'RobotoNum3R', 'DINPro-medium', 'Samsung Sans Num55', 'SST Heavy Italic', 'LGlock4 Regular_0805', 'noto-sans-cjk', 'Telugu Sangam MN Bold', 'MIUI EX Normal', 'HYQiHei-75S Bold', 'NotoSansMyanmarZawgyi Bold', 'yunospro-black', 'helve-neue-normal', 'Luminous_Serif', 'TM MohantyOT Normal', 'SamsungSansNum-3Lv Light', 'Samsung Sans Num45', 'SmartGothic Medium', 'casual-font-type', 'Samsung Sans Bold', 'small-capitals', 'MFinance PRC Bold', 'FZLanTingHei_GB18030', 'SamsungArmenian', 'Roboto Bold', 'century-gothic-bold', 'x-sst-heavy', 'SST Light Italic', 'TharLon', 'x-sst-light', 'Dinbol Regular', 'SamsungBengaliRegular', 'KN MohantyOTSmall Medium', 'hypure', 'SamsungTamilRegular', 'Malayalam Sangam MN', 'Noto Sans Kannada UI', 'helve-neue', 'Helvetica LT 55 Roman', 'Noto Sans Kannada Bold', 'Sanpya', 'SamsungPunjabiRegular', 'samsung-sans-num4Lv', 'LG_Kannada', 'Samsung Sans Regular', 'Zawgyi-One', 'Droid Serif Bold Italic', 'FZKATJW', 'SamsungEmojiRegular', 'MIUI EX Bold', 'Android Emoji', 'Noto Naskh Arabic UI', 'LCD Com', 'Futura Medium BT', 'Vivo-extract', 'Bangla Sangam MN Bold', 'hans-sans-regular', 'SNum-3R', 'SNum-3T', 'hans-sans', 'SST Ultra Light', 'Roboto Regular', 'Roboto Light', 'Hanuman', 'newlggothic', 'DFHeiAW5-A', 'hans-sans-light', 'Plate Gothic', 'SNum-3L', 'Helvetica LT 45 Light', 'Myanmar Sangam Zawgyi Bold', 'lg-sans-serif-light', 'MIUI EX Light', 'Roboto Thin', 'SoMA Bold', 'Padauk', 'Samsung Sans', 'Spacious_SmallCap', 'sans-serif', 'DV MohantyOT Medium', 'Stable_Slap', 'monaco', 'Flyme-Light', 'fzzys-dospy', 'ScreenSans', 'clock2016', 'Roboto Condensed Bold Italic', 'KN Mohanty Medium', 'MotoyaLMaru W3 mono', 'Handset Condensed', 'Roboto Italic', 'HTC Hand', 'SST Ultra Light Italic', 'SST Vietnamese Roman', 'Noto Naskh Arabic UI Bold', 'chnfzxh-medium', 'SNumCond-3T', 'century-gothic-regular', 'default_roboto-light', 'Noto Sans Myanmar', 'Myanmar Sangam MN', 'Apple Color Emoji', 'weatherfontReg', 'SamsungMalayalamRegular', 'Droid Serif Bold', 'CPo3 PRC Bold', 'MI LANTING', 'SamsungKorean-Regular', 'test45 Regular', 'spirit_time', 'Devanagari Sangam MN', 'ScreenSerif', 'Roboto', 'cursive-font-type', 'STHeiti_vivo', 'chnfzxh', 'Samsung ClockFont 3A', 'Roboto Condensed Regular', 'samsung-neo-num3R', 'GJ MohantyOT Medium', 'Chulho Neue Lock', 'roboto-num3L', 'helve-neue-ultraLightextended', 'SamsungOriyaRegular', 'SamsungSansNum-4Lv Light', 'MYingHei_18030_C2-Bold', 'DFPShaoNvW5-GB', 'Roboto Black', 'helve-neue-ultralight', 'gm_xihei', 'LGlock4 Light_0805', 'Gujarati Sangam MN', 'Malayalam Sangam MN Bold', 'roboto-num3R', 'STXihei_vivo', 'FZZhunYuan_GB18030', 'noto-sans-cjk-light', 'coloros', 'Noto Sans Gurmukhi', 'Noto Sans Symbols', 'Roboto Light Italic', 'Lohit Tamil', 'default_roboto', 'BhashitaComplexSans Bold', 'LG_Number_Roboto Thin', 'monospaced-without-serifs', 'Helvetica LT 35 Thin', 'samsung-sans-num3LV', 'DINPro', 'Jomolhari', 'sans-serif-light', 'helve-neue-black', 'Lohit Bengali', 'Myanmar Sangam Zawgyi', 'Droid Serif Italic', 'Roboto Bold Italic', 'NanumGothic', 'Sony Mobile UD Gothic Regular', 'Georgia Bold Italic', 'samsung-sans-num3Lv', 'yunos-thin', 'samsung-neo-num3T-cond', 'Noto Sans Myanmar UI Bold', 'lgserif', 'FZYouHei-R-GB18030', 'Lohit Punjabi', 'baskerville', 'samsung-sans-num4Tv', 'samsung-sans-thin', 'LG Emoji', 'AnjaliNewLipi', 'SamsungSansNum-4T Thin', 'SamsungKorean-Bold', 'miuiex-light', 'Noto Sans Kannada', 'Roboto Normal Italic', 'Georgia Italic', 'sans-serif-medium', 'Smart Zawgyi', 'Roboto Condensed Italic', 'Noto Sans Kannada UI Bold', 'DFP Sc Sans Heue30_103', 'LG_Number_Roboto Bold', 'Padauk Book', 'x-sst-condensed', 'Sunshine-Uchen', 'Roboto Black Italic', 'Ringo Color Emoji', 'Devanagari OTS', 'Smart Zawgyi Pro', 'FZLanTingHei-M-GBK', 'AndroidClock-Large Regular', 'proportionally-spaced-without-serifs', 'Cutive Mono', 'LG Smart_H test Bold', 'DINPro-Light', 'sans-serif-black', 'Lohit Devanagari', 'proportionally-spaced-with-serifs', 'samsung-sans-num3L', 'MYoung PRC Medium', 'DFGothicPW5-BIG5HK-SONY', 'hans-sans-medium', 'SST Heavy', 'LG-FZZhunYuan-M02-V2.2', 'MyanmarUNew Regular', 'Noto Naskh Arabic Bold', 'SamsungGujarathiRegular', 'helve-neue-light', 'Helvetica Neue OTS Bold', 'noto-sans-cjk-bold', 'samsung-sans-num3R', 'Lindsey Samsung', 'samsung-sans-num3T', 'ScreenSerifMono', 'ETrump Myanmar_ZW', 'helve-neue-thinextended', 'Noto Naskh Arabic', 'LG_Gujarati', 'Smart_Monospaced', 'Tamil Sangam MN', 'LG Emoji NonAME', 'Roboto Condensed Light Italic', 'gm_jingkai', 'FZLanTingKanHei_GB18030', 'lgtravel', 'palatino', 'Georgia Bold', 'Droid Sans', 'LG_Punjabi', 'SmartGothic Bold', 'Samsung Sans Thin', 'SST Condensed Bold', 'Comics_Narrow', 'Oriya Sangam MN', 'helve-neue-lightextended', 'FZLanTingHei-R-GB18030', 'AR CrystalheiHKSCS DB', 'RTWSYueRoudGoG0v1-Regular', 'MiaoWu_prev', 'FZY1K', 'LG_Number_Roboto Regular', 'AndroidClock', 'SoMA Regular', 'HYQiHei-40S Lightx', 'lg-sans-serif', 'Dancing Script Bold', 'default', 'sec-roboto-light', 'ColorOSUI-Regular', 'test Regular', 'Tamil Sangam MN Bold', 'FZYingBiXingShu-S16', 'RobotoNum3L Light', 'monospaced-with-serifs', 'samsung-sans-num35', 'Cool jazz', 'SamsungNeoNum-3L', 'ScreenSansMono', 'DFPWaWaW5-GB', 'SamsungSansNum-3L Light', 'Bangla Sangam MN', 'Gurmukhi Sangam MN', 'SECRobotoLight', 'hyfonxrain', 'MYingHeiGB18030C-Bold', 'samsung-sans-light', 'Helvetica LT 65 Medium', 'Droid Sans Fallback', 'Roboto Test1 Bold', 'Noto Sans Myanmar Bold', 'sans-serif-condensed-custom', 'SamsungNeoNum-3T', 'Samsung Sans Num35', 'TL Mohanty Medium', 'helve-neue-medium', 'LTHYSZK', 'Roboto Condensed custome Bold', 'Myanmar3', 'Droid Sans Devanagari', 'ShaoNv_prev', 'samsung-neo-num3L', 'FZLanTingHei-EL-GBK', 'yunos', 'samsung-neo-num3T', 'helve-neue-bold', 'noto-sans-cjk-regular', 'Noto Sans Gurmukhi UI Bold', 'DINPro-black', 'FZLanTingHei-EL-GB18030', 'SST Vietnamese Medium', 'Roboto Condensed Light', 'SST Vietnamese Bold', 'AR DJ-KK', 'Droid Sans SEMC', 'Noto Sans Myanmar UI', 'Coming Soon', 'MYuppy PRC Medium', 'Rosemary', 'Lohit Gujarati', 'Roboto Condensed custom Bold', 'FZLanTingHeiS-R-GB', 'Helvetica Neue OTS', 'Kaiti_prev', 'Roboto-BigClock', 'FZYBKSJW', 'Handset Condensed Bold', 'SamsungGeorgian', 'Dancing Script', 'sans-serif-condensed', 'hans-sans-thin', 'SamsungSansNum-4Tv Thin', 'Lohit Odia', 'BhashitaComplexSans'];

globalMy.memory.fontFamily_2 = ['SimHei', 'SimSun', 'NSimSun', 'FangSong', 'KaiTi', 'STKaiti', 'STSong', 'STFangsong', 'LiSu', 'YouYuan', 'STXihei', 'STZhongsong', 'FZShuTi', 'FZYaoti', 'STCaiyun', 'STHupo', 'STLiti', 'STXingkai', 'STXinwei', 'Verdana', 'Helvetica Neue LT Pro 35 Thin', 'tahoma', 'verdana', 'times new roman', 'Courier New', 'Microsoft Himalaya', 'helvetica', 'LG-FZKaTong-M19-V2.2', 'Georgia', 'georgia', 'courier new', 'Arial', 'arial', 'cursive', 'times', 'fantasy', 'courier', 'serif', 'STXingkai', 'monospace', 'Times New Roman'];

// webgl指纹
globalMy.memory.canvas_webgl_fingerprint = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAADTZJREFUeF7tnV2IXVcVx9eeO4NIEQURLcUvVGrBolIVoQ/ePCgUBYUiUlBQFBTUhxaKgsLci4o+qIiICoqIioKIH+iD+tAZFVSMdGISMzqJTezYWBM02GqCTcmRfT8yN3fO/Tofe6+1929ec87Za/3/q7/uve7e5zjhDwVQAAWMKOCMxEmYKIACKCAAiyJAARQwowDAMmMVgaIACgAsagAFUMCMAgDLjFUEigIoALCoARRAATMKACwzVhEoCqAAwKIGUAAFzCgAsMxYRaAogAIAixpAARQwowDAMmMVgaIACgAsagAFUMCMAgDLjFUEigIoALCogcYVuFpId12k65z0Gn84D8xaAYCVtf3tJD8C1paIHHFOttsZhafmqADAytH1lnO+VsiWE+mKyLZzcqTl4Xh8RgoArIzMDpXqBLD8kH2WhqGUT38cgJW+x8EzvFZIMVVYQCu4C2kOCLDS9DVaVr5/1ZHBknD6j35WNFfSGRhgpeOlikyuFtLriGyWFBb9LBUO2Q4CYNn2T130Txaytea3NJRHxtJQnWO2AgJYtvxSH+2ThRRrIvM+FgC01LuoN0CApdcbc5H5/pWTwQxr7tdNnOPjJ+bMVRIwwFJiRAphLAss9mel4HacHABWHN2THPXqaMPoohnWKHmWhklWQbtJAax29c3q6VdH+6+WBJbXBmhlVSH1kwVY9TXkCSJyZXjgebD/agVgCf0symcVBQDWKmpx7UwFqgKLfhZFtYoCAGsVtbh2pgJPjPpXq86w6GdRVKsoALBWUYtr2wIW/SxqaykFANZSMnHRIgX+N7FhdJUe1uRz6WctUpl/B1jUQG0FfP9qbWLDaFVg0c+qbUXyDwBYyVvcfoJXRucHx6CqASyWhu3bZXoEgGXaPh3BNwwsoKXDVpVRACyVttgK6sqof9XQDGuQPP0sWzUQKlqAFUrpRMd5fLRh1MOqSWCxCz7RgqmZFsCqKWDut/+3kN6ayGYLwGJpmHtxleQPsCiKWgpcnjjw3PAMaxwX5w1rOZTWzQArLT+DZ3N54sBzS8CinxXcVb0DAiy93qiPzPevxh+caGlJyCxLfRWEDRBghdU7qdECAot+VlKVUz0ZgFVdu+zv/M/EBydanmEx08q+2oYCACwKobICEYBFP6uyW2ncCLDS8DF4FpcK6W5MnR9sq+k+lRy/GgZ3W8+AAEuPF6YiiQgs+lmmKqXZYAFWs3pm87THSg48B5ph0c/KpsoOJwqwMja/TuoKgEU/q46BRu8FWEaNix32YyUHngPPsFgaxi6CCOMDrAiiWx/S96/8htHprQwRgAW0rBfTivEDrBUF43KRS4X0OiUHniMBy1tyxDnZxpv0FQBY6XvceIa+fyUyeC3yDa+UiQgs+lmNu6zzgQBLpy+qo/r3jAPPMYHF+7NUl0xjwQGsxqTM40G+f+U/ODH+/uAkpCIDi35WBiUIsDIwuckUlQOLflaTZit8FsBSaIrmkC7NOfCsYIY1kI73wWuuoHqxAax6+mV396WpD6YqWxKO/eC8YaKVCbASNbaNtC5OfHBCaQ9rMm2g1UYRRH4mwIpsgKXhjQGLfpal4loyVoC1pFBcJvKviQ9OGJhh0c9KsGgBVoKmtpWSRWCxP6utaojzXIAVR3eTo/5zwYFnLb8SlohLP8tkxR0OGmAlYmTbafj+ld8wOu84jmJg0c9qu0ACPR9gBRLa+jAXJ17YN2srg3JgbTsnR6z7kHv8ACv3Clgy/wSA5TNlabik31ovA1hanVEW18WJ/pXRGdZYUaClrLZWCQdgraJWptf+fWLDqOEe1qR7vD/LaC0DLKPGhQz7H4X01iZe2Gd8huWlo58VsoAaHAtgNShmqo+6MLFhNJEZFv0so8UKsIwaFzLsC1Mv7EtghkU/K2QBNTgWwGpQzBQf5ftX/oMTk0dxEgKWt4x+lqHCBViGzIoRagbAop8Vo7AqjgmwKgqXy22PlrywL7EZFv0sQ8UMsAyZFSPUTIAFtGIUV4UxAVYF0XK5Zb+Q7sbo/GDCPazrdvJqZf2VDbD0exQtwv2r0t1YGx54zgFY4mTbrXHeMFrBLTEwwFpCpFwvOf/EAFaDD6ZmASxvdCF99xTp5eq59rwBlnaHIsZ3/nKGwBpD6yagFbH0Zg4NsDS6oiSm849LUbazPcFfCQ8p7p42mFTyp0wBTFFmiJZw9i9Jt+PKX9iXA7AG5w2fQT9LSz2O4wBY2hxREs/+Rel1nGzmOsMa2OD7Wc9iaaikJAdhACxNbiiK5fwF2ZLha5Elq6b7tAfXpO9uBlpaShNgaXFCWRyPPCLFrE95ZbIkvO6Iu4X/sWspT4ClxQlFceyfle5a58YDz9lsayj3Yds9j36WhhIFWBpcUBbDAFhTb2jIHFgifmn4IpaGsUsVYMV2QOH4+6eH+69YEk6Z46F1K9CKWbIAK6b6Ssfe/9Nw/xXAOmyQeyn9rJhlC7Biqq9w7LMnpLs+2n8FsEoN2nYvo58Vq3QBVizllY57dke66yUHnrPvYU365ZeGr2RpGKOEAVYM1RWP+fCDg18HDx14BlhTpvlNpXcArdClDLBCK658vId/B7CWtci9hn7Wslo1dR3AakrJRJ7z19+UH3hmhlVisF8a3sksK2TpA6yQaisf6+yvhvuvFn17MLed7nNt89B6HdAKVdoAK5TSBsY5t32wHGRbwwqG+X7WEaC1gmKVLwVYlaVL78ZzD8iWm3HgmSXhHL/9LOv1ACvEfxEAK4TKRsY497PZB54B1gwTPazuAlahShxghVJa+TinfyzdjTkHngFWybaGNwKq0GUNsEIrrnS8v/xo+MK+WbvbAdbION+vejOgilXGACuW8srGfegH8w88Zw8sv/S7G1DFLluAFdsBJeM/9L35B56zBZafUb0VUCkpU3bqajEiZhynv3PwwQmWhBNLv3sAVcy6LBubGZY2RyLEc/qb0u0sOPCczQzLL/3eAagilOFSQwKspWRK+6Iz35CttdH+q2xnWNek71127wJWmqsdYGl2J1BsZ75W/oXnbN6H5ftU7wZUgcqt1jAAq5Z89m/e/Yp0N5Y4P5jkktAv/94LqCxVMcCy5FYLse5+KUNgeVC9H1C1UE6tPxJgtS6x7gH2vnCwHFzmLQyL3uQwnompLCy/9PsgoNJdkfOjU1lXlgW1Fvve5zIAlgfVvYDKWm2yrSEFxxrOYe8zBy/sS26G5Zd+9wOqhksm6uOYYUWVP+7gu5+Ubqdz8MK+ZIDlZ1QfAlRxq6ud0QFWO7qaeOruJ4YHnsd9KfPAKkZ7qT4CrEwUYIUgAVYF0VK5Ze9jsiWjL+Qs20xf9rrgheWXf5uAKpXanJVH8LpKXVBL+f1588YX9pmcYTnpux6gslR3dWIFWHXUM3zv7keHH5xYdUOoohlW330cUBkuwUqhA6xKstm/6Y8flt761Av7TMywfEP9U4DKfgVWywBgVdPN/F279x9+YZ9qYHlQfRpQmS+8mgkArJoCWr19977DL+xTCqy++yygslpnTccNsJpW1MDzTnxAuusl779SBqy++zygMlBOQUMEWEHl1jHYAFjFcMOouqb7eC/VF4GVjmrRFQXA0uVHkGhOve/gC8/KgNV3XwZUQYrA6CAAy6hxdcI+9R51wOq7rwKqOp7mci/AysXpUZ4n3indNXdwfjDqDMv/8vd1QJVZCdZKF2DVks/ezSfergBYHlTfAlT2qid+xAArvgdBIzh5j2w5N9jlLhGa7n33bUAV1PDEBgNYiRm6KJ2TbzvoXwUDlp9RfRdQLfKGf1+sAMBarFFSV5y8+8YDz632sDyovg+okiqgyMkArMgGhBx+5y3DD07U+XzXMoefnUh/MHv7IbAK6W8OYwGsHFwe5fiHN0mvI7LZJrBEpL/xE0CVUVkFTRVgBZU77mDH7zp84LmpJaEU0n/qTwFVXIfTHx1gpe/x9QyPv+Hwgee6wPLLv5t+DqgyKqOoqQKsqPKHG3ynK91OyYHnqsDyS7+nPwCowjnISF4BgJVJHQyAVXLgeVVg+aXfM38JqDIpG3VpAix1lrQT0LE7Dz6YWqXpXhTSf/avAVU77vDUZRUAWMsqZfy6Y6+tBizfo7r5t4DKuP3JhA+wkrFydiI7r5Kum3HgedaS0C/9/F6qW34PrDIoETMpAiwzVlUPdOcVqwHLw+r5xwBVdcW5sy0FAFZbyip67s7tsw88T/Wz+i88DqgUWUcoUwoArAxKYue2+cDyfaqXnAJUGZSC+RQBlnkLFyewc2v5gWe/9LttD1AtVpArtCgAsLQ40VIcR18s3fWpA8+FSP/2M4CqJcl5bIsKAKwWxdXw6KMvkN766MCzX/q9/Byg0uALMVRTAGBV083MXQ8+V7aKQn5xx98AlRnTCHSmAgAr8eI4+hzpvfpRYJW4zdmkB7CysZpEUcC+AgDLvodkgALZKACwsrGaRFHAvgIAy76HZIAC2SgAsLKxmkRRwL4CAMu+h2SAAtkoALCysZpEUcC+Av8HwhAmtT6LhaYAAAAASUVORK5CYII="

// 存放setTImeout fun
globalMy.func = [];
globalMy.func_interval = [];
globalMy.func_promise = [];
// setTimeout方法的id数组
globalMy.Id = [];
// 该id会自增
globalMy.IntervalId = 0;

// globalMy element 存放所有对象的数组
globalMy.element = [];
//存放对象下的值
globalMy.value = [];

// dom树是否被改变
globalMy.tree_is_change = true;
globalMy.dom_tree = [];

// 存放触发过后即清除事件的对象
globalMy.event_value = [];
globalMy.event = [];

// base64
globalMy.base64 = {};
globalMy.base64.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
globalMy.base64.base64DecodeChars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

globalMy.base64.base64encode = function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += globalMy.base64.base64EncodeChars.charAt(c1 >> 2);
            out += globalMy.base64.base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += globalMy.base64.base64EncodeChars.charAt(c1 >> 2);
            out += globalMy.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += globalMy.base64.base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += globalMy.base64.base64EncodeChars.charAt(c1 >> 2);
        out += globalMy.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += globalMy.base64.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += globalMy.base64.base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}
globalMy.base64.base64decode = function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /* c1 */
        do {
            c1 = globalMy.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1)
            break;

        /* c2 */
        do {
            c2 = globalMy.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = globalMy.base64.base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = globalMy.base64.base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
// 工具类
globalMy.getMidStr = function getValue(key1, key2, str) {
    var m = str.match(new RegExp(key1 + '(.*?)' + key2));
    return m ? m[1] : false;
};
globalMy.getRandomNum = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 设置该元素的索引
globalMy.setfoundName = function setfoundName(obj) {
    var foundName = globalMy.element.push(obj) - 1;
    globalMy.value[foundName] = {};
    // 会有种情况就是 navigator的plugins 和 pluginArray 的名字不一样但是指向同一个东西，就会导致无限循环
    return foundName;
}
// 找到jsdom对象索引
globalMy.foundJsdomName = function foundName(obj, name) {
    var foundName = globalMy.jsdom_element.indexOf(obj);
    if (foundName < 0) {
        var construct = obj.__proto__[Symbol.toStringTag];
        if (!construct) construct = name;
        if (!construct) debugger;
        var name = globalMy.setfoundName({});
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        globalMy.jsdom_element[name] = obj;
        foundName = name;
        // if (obj instanceof globalMy.jsdom.window.HTMLElement) { }
        // else {
        //     debugger;
        // }
    }
    return foundName;
}
// 找到js沙箱对象索引
globalMy.foundName = function foundName(obj) {
    var foundName = globalMy.element.indexOf(obj);
    if (foundName < 0) {
        debugger;
        globalMy.console.log("[*]  foundName未找到对象");
        throw new Error("foundName未找到对象");
    }
    return foundName;
}
// 找到js沙箱事件对象索引
globalMy.foundEventName = function foundEventName(obj) {
    var foundName = globalMy.event.indexOf(obj);
    if (foundName < 0) {
        debugger;
        globalMy.console.log("[*]  foundEventName未找到对象");
        throw new Error("foundEventName未找到对象");
    }
    return foundName;
}

// 遍历获取dom树下的节点
globalMy.getDomTree = function (dom) {
    var dom_tree = [dom];
    var children = dom.children;
    var length = children.length;
    for (var i = 0; i < length; i++) {
        dom_tree = dom_tree.concat(globalMy.getDomTree(children[i]));
    }
    return dom_tree;
}
globalMy.getJsdomTree = function (dom) {
    var dom_tree = [dom];
    var children = dom.children;
    var length = children.length;
    for (var i = 0; i < length; i++) {
        dom_tree = dom_tree.concat(globalMy.getJsdomTree(children[i]));
    }
    return dom_tree;
}

// 创建工具类
globalMy.createPlugin = function createPlugin(plugin_name, filename, description) {
    var plugin = {};
    Object.setPrototypeOf(plugin, Plugin.prototype);
    let name = globalMy.setfoundName(plugin);
    globalMy.value[name]['name'] = plugin_name;
    globalMy['value'][name]['filename'] = filename;
    globalMy['value'][name]['description'] = description;
    var mimeType_1 = globalMy.createMimeType("application/pdf", "pdf", description);
    var mimeType_2 = globalMy.createMimeType("text/pdf", "pdf", description);
    plugin[0] = mimeType_1;
    plugin[0].enabledPlugin = plugin;
    plugin[1] = mimeType_2;
    plugin[1].enabledPlugin = plugin;
    return plugin;
}
globalMy.createMimeType = function createMimeType(type, suffixes, description) {
    var mimeType = {};
    Object.setPrototypeOf(mimeType, MimeType.prototype);
    let name = globalMy.setfoundName(mimeType);
    globalMy['value'][name]['type'] = type;
    globalMy['value'][name]['suffixes'] = suffixes;
    globalMy['value'][name]['description'] = description;
    return mimeType;
}

// 创建事件 供dispatchEvent触发
globalMy.createEvent = function createEvent(type, target) {
    if (type.indexOf("mouse") !== -1 || type === 'click') {

        var name = globalMy.event.push({}) - 1;
        globalMy.event_value[name] = {};
        if (type.indexOf("mouse") !== -1) {
            Object.setPrototypeOf(globalMy.event[name], MouseEvent.prototype)
        } else {
            Object.setPrototypeOf(globalMy.event[name], PointerEvent.prototype)
        }
        Utils.defineIstrusted(globalMy.event[name]);
        var html_element = document.documentElement;
        globalMy.event_value[name]["target"] = html_element;
        globalMy.event_value[name]["srcElement"] = html_element;
        globalMy.event_value[name]["altKey"] = false;
        globalMy.event_value[name]["isTrusted"] = true;
        // globalMy.event_value[name]["clientX"] = globalMy.getRandomNum(500, 1700)
        // globalMy.event_value[name]["clientY"] = globalMy.getRandomNum(200, 500)
        // globalMy.event_value[name]["screenX"] = globalMy.event_value[name]["clientX"]
        // globalMy.event_value[name]["screenY"] = globalMy.getRandomNum(200, 500)
        // globalMy.event_value[name]["pageX"] = globalMy.event_value[name]["clientX"]
        // globalMy.event_value[name]["pageY"] = globalMy.event_value[name]["clientY"]
        // globalMy.event_value[name]["x"] = globalMy.event_value[name]["clientX"]
        // globalMy.event_value[name]["y"] = globalMy.event_value[name]["clientY"]
        // globalMy.event_value[name]["offsetX"] = globalMy.getRandomNum(600, 1400)
        // globalMy.event_value[name]["offsetY"] = globalMy.getRandomNum(300, 450)
        // globalMy.event_value[name]["layerX"] = globalMy.getRandomNum(600, 1400)
        // globalMy.event_value[name]["layerY"] = globalMy.getRandomNum(300, 450)
        // globalMy.event_value[name]["movementX"] = globalMy.getRandomNum(-50, 50)
        // globalMy.event_value[name]["movementY"] = globalMy.getRandomNum(-50, 50)
        globalMy.event_value[name]["type"] = type;
        globalMy.event_value[name]["timeStamp"] = Date.now() - globalMy.memory.begin_time;

    }
    //创建load等事件
    else if (type.indexOf("load") !== -1) {
        var name = globalMy.event.push({}) - 1;
        globalMy.event_value[name] = {};
        Utils.defineIstrusted(globalMy.event[name]);
        Object.setPrototypeOf(globalMy.event[name], Event.prototype);
        globalMy.event_value[name] = {"isTrusted": true,"bubbles": false, "cancelable": false, "defaultPrevented": false, "composed": false,
            "timeStamp": Date.now() - globalMy.memory.begin_time, "returnValue": true, "cancelBubble": false,}
        globalMy.event_value[name]["target"] = target;
        globalMy.event_value[name]["currentTarget"] = target;
        globalMy.event_value[name]["srcElement"] = target;
        globalMy.event_value[name]["type"] = type;

    }
    else if (type === "deviceorientation") {

    }
    else if (type === "CustomEvent") {
        var name = globalMy.event.push({}) - 1;
        Object.setPrototypeOf(globalMy.event[name], CustomEvent.prototype);
        Utils.defineIstrusted(globalMy.event[name]);
        globalMy.event_value[name] = {"isTrusted": false,
            "detail": null, "type": "", "target": null, "currentTarget": null, "eventPhase": 0, "bubbles": false, "cancelable": false, "defaultPrevented": false, "composed": false,
            "timeStamp": Date.now() - globalMy.memory.begin_time, "srcElement": null, "returnValue": true, "cancelBubble": false,
        }
    }
    else if (type === "UIEvent") {
        var name = globalMy.event.push({}) - 1;
        Object.setPrototypeOf(globalMy.event[name], UIEvent.prototype);
        Utils.defineIstrusted(globalMy.event[name]);
        globalMy.event_value[name] = {"isTrusted": false,
            "detail": null, "type": "", "target": null, "currentTarget": null, "eventPhase": 0, "bubbles": false, "cancelable": false, "defaultPrevented": false, "composed": false,
            "timeStamp": Date.now() - globalMy.memory.begin_time, "srcElement": null, "returnValue": true, "cancelBubble": false,
        }
    }
    else {
        debugger;
    }

    return globalMy.event[name];
}

// 报错
globalMy.call_error = function error(x, y) {
    let e = new TypeError;
    e.message = x;
    e.stack = e.stack.replace(y, y + x);
    throw e;
};
globalMy.generateUUID = function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

// jsdom解析html源码的节点未clone到本地对象里 该方法做初始化节点操作
globalMy.initDomChildren = function (dom) {
    var nodeList = dom.childNodes;
    var length = nodeList.length;
    for (var i = 0; i < length; i++) {
        var construct = nodeList[i].__proto__[Symbol.toStringTag];
        var name = globalMy.setfoundName({});
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        globalMy.jsdom_element[name] = nodeList[i];
        globalMy.initDomChildren(nodeList[i], name);
    }
}
globalMy.initDomTree = function (dom_document) {
    var a = +new Date;
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], DocumentType.prototype);
    globalMy.jsdom_element[name] = dom_document.doctype;

    name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], HTMLHtmlElement.prototype);
    globalMy.jsdom_element[name] = dom_document.documentElement;
    globalMy.initDomChildren(globalMy.jsdom_element[name], name);
    console.log("clone jsdom 节点对象完成,耗时 ", +new Date - a, "毫秒");
}

// 清空异步调用
globalMy.asyncFunc = function () {
    while (1) {
        // debugger
        var func_promise = globalMy.func_promise.shift();
        if (!func_promise) {
            while (1) {
                var func = globalMy.func.shift();
                if (!func) {
                    return;
                }
                try {
                    func[0].apply(window, func[1]);
                } catch (e) {
                    globalMy.console.log("执行setTimeout方法报错, 报错信息如下: ", e);
                    // break
                }
            }
        }
        try {
            func_promise[0].apply(window, func_promise[1]);
        } catch (e) {
            globalMy.console.log("执行Promise方法报错, 报错信息如下: ", e);
        }
    }
}

// Promise 会将方法和传参传入这个函数
globalMy.setPromise = function setPromise(func, delay, ...args) {
    if (globalMy.is_log) {
        globalMy.console.log("setPromise func=>", func + '');
        globalMy.console.log("setPromise args=>", args);
    }
    globalMy.func_promise.push([func, args]);
    //返回一个id
}

// 主动调用定时函数
globalMy.callInterval = function callInterval() {
    while (1) {
        var length = globalMy.func_interval.length;
        for (var i = 0; i < length; i++) {
            try {
                globalMy.func_interval[i][0].apply(window, globalMy.func_interval[i][1]);
            } catch (e) {
                globalMy.console.log("执行Interval方法报错, 报错信息如下: ", e);
            }
        }
    }
}
// 鼠标事件
globalMy.callMouseEvent = function callMouseEvent() {
    // 一般是由document触发, 具体看网页事件绑定的是window还是document对象

    // var event = globalMy.createEvent("mouseenter")
    // event.isTrusted = true
    // document.dispatchEvent(event);

    // event = globalMy.createEvent("mouseenter")
    // event.isTrusted = true
    // document.dispatchEvent(event);

    // event = globalMy.createEvent("mouseenter")
    // event.isTrusted = true
    // document.dispatchEvent(event);

    var event = globalMy.createEvent("mousedown")
    event.isTrusted = true
    document.dispatchEvent(event);

    for (var i = 0; i < 50; i++) {
        event = globalMy.createEvent("mousemove")
        event.isTrusted = true
        document.dispatchEvent(event)
    }

    // event = globalMy.createEvent("mouseleave")
    // event.isTrusted = true
    // document.dispatchEvent(event);

    // event = globalMy.createEvent("mouseleave")
    // event.isTrusted = true
    // document.dispatchEvent(event);

    // event = globalMy.createEvent("mouseleave")
    // event.isTrusted = true
    // document.dispatchEvent(event);

    // event = globalMy.createEvent("mouseup")
    // event.isTrusted = true
    // document.dispatchEvent(event);
}



// 构造函数 非new调用的话 无非就两种报错.
globalMy.err_code = `Failed to construct 'replace': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`;

// 参数传少了
globalMy.arg_less_code = `Failed to construct 'replace': 1 argument required, but only 0 present.`;

// 基础对象

globalMy.memory.throw_err = {
    // "Promise": ["Promise constructor cannot be invoked without 'new'"],
    "MutationObserver": ["MutationObserver", 1],
    "RTCPeerConnection": ["RTCPeerConnection"],
    "Document": ["Document"],
    "EventTarget": ["EventTarget"],
    "Node": [],
    "Element": [],
    "HTMLElement": ["HTMLElement", ""],
    "WebGLRenderingContext": [],
    "CanvasRenderingContext2D": [],
    "HTMLAnchorElement": ["HTMLAnchorElement", ""],
    "HTMLImageElement": ["HTMLImageElement", ""],
    "HTMLFontElement": ["HTMLFontElement", ""],
    "HTMLOutputElement": ["HTMLOutputElement", ""],
    "HTMLAreaElement": ["HTMLAreaElement", ""],
    "HTMLInputElement": ["HTMLInputElement", ""],
    "HTMLFormElement": ["HTMLFormElement", ""],
    "HTMLParagraphElement": ["HTMLParagraphElement", ""],
    "HTMLAudioElement": ["HTMLAudioElement", ""],
    "HTMLLabelElement": ["HTMLLabelElement", ""],
    "HTMLFrameElement": ["HTMLFrameElement", ""],
    "HTMLParamElement": ["HTMLParamElement", ""],
    "HTMLBaseElement": ["HTMLBaseElement", ""],
    "HTMLLegendElement": ["HTMLLegendElement", ""],
    "HTMLFrameSetElement": ["HTMLFrameSetElement", ""],
    "HTMLPictureElement": ["HTMLPictureElement", ""],
    "HTMLBodyElement": ["HTMLBodyElement", ""],
    "HTMLLIElement": ["HTMLLIElement", ""],
    "HTMLHeadingElement": ["HTMLHeadingElement", ""],
    "HTMLPreElement": ["HTMLPreElement", ""],
    "HTMLBRElement": ["HTMLBRElement", ""],
    "HTMLLinkElement": ["HTMLLinkElement", ""],
    "HTMLHeadElement": ["HTMLHeadElement", ""],
    "HTMLProgressElement": ["HTMLProgressElement", ""],
    "HTMLButtonElement": ["HTMLButtonElement", ""],
    "HTMLMapElement": ["HTMLMapElement", ""],
    "HTMLHRElement": ["HTMLHRElement", ""],
    "HTMLQuoteElement": ["HTMLQuoteElement", ""],
    "HTMLCanvasElement": ["HTMLCanvasElement", ""],
    "HTMLMarqueeElement": ["HTMLMarqueeElement", ""],
    "HTMLHtmlElement": ["HTMLHtmlElement", ""],
    "HTMLScriptElement": ["HTMLScriptElement", ""],
    "HTMLDataElement": ["HTMLDataElement", ""],
    "HTMLMediaElement": [],
    "HTMLIFrameElement": ["HTMLIFrameElement", ""],
    "HTMLTimeElement": ["HTMLTimeElement", ""],
    "HTMLDataListElement": ["HTMLDataListElement", ""],
    "HTMLMenuElement": ["HTMLMenuElement", ""],
    "HTMLSelectElement": ["HTMLSelectElement", ""],
    "HTMLTitleElement": ["HTMLTitleElement", ""],
    "HTMLDetailsElement": ["HTMLDetailsElement", ""],
    "HTMLMetaElement": ["HTMLMetaElement", ""],
    "HTMLSlotElement": ["HTMLSlotElement", ""],
    "HTMLTableRowElement": ["HTMLTableRowElement", ""],
    "HTMLDialogElement": ["HTMLDialogElement", ""],
    "HTMLMeterElement": ["HTMLMeterElement", ""],
    "HTMLSourceElement": ["HTMLSourceElement", ""],
    "HTMLTableSectionElement": ["HTMLTableSectionElement", ""],
    "HTMLDirectoryElement": ["HTMLDirectoryElement", ""],
    "HTMLModElement": ["HTMLModElement", ""],
    "HTMLSpanElement": ["HTMLSpanElement", ""],
    "HTMLTemplateElement": ["HTMLTemplateElement", ""],
    "HTMLDivElement": ["HTMLDivElement", ""],
    "HTMLObjectElement": ["HTMLObjectElement", ""],
    "HTMLStyleElement": ["HTMLStyleElement", ""],
    "HTMLTextAreaElement": ["HTMLTextAreaElement", ""],
    "HTMLDListElement": ["HTMLDListElement", ""],
    "HTMLOListElement": ["HTMLOListElement", ""],
    "HTMLTableCaptionElement": ["HTMLTableCaptionElement", ""],
    "HTMLTrackElement": ["HTMLTrackElement", ""],
    "HTMLEmbedElement": ["HTMLEmbedElement", ""],
    "HTMLOptGroupElement": ["HTMLOptGroupElement", ""],
    "HTMLTableCellElement": ["HTMLTableCellElement", ""],
    "HTMLUListElement": ["HTMLUListElement", ""],
    "HTMLFieldSetElement": ["HTMLFieldSetElement", ""],
    "HTMLOptionElement": ["HTMLOptionElement", ""],
    "HTMLTableColElement": ["HTMLTableColElement", ""],
    "HTMLUnknownElement": [],
    "HTMLTableElement": ["HTMLTableElement", ""],
    "HTMLVideoElement": ["HTMLVideoElement", ""],
    "Event": ["Event", 1],
    "BatteryManager": [],
    "CharacterData": [],
    "CSSStyleDeclaration": [],
    "DocumentType": [],
    "DOMParser": ["DOMParser"],
    "HTMLAllCollection": [],
    "InputDeviceCapabilities": ["InputDeviceCapabilities"],
    "HTMLCollection": [],
    "HTMLDocument": [],
    "IDBFactory": [],
    "IDBRequest": [],
    "IDBOpenDBRequest": [],
    "MediaEncryptedEvent": ["MediaEncryptedEvent", 1],
    "MimeType": [],
    "MimeTypeArray": [],
    "MouseEvent": ["MouseEvent", 1],
    "Navigator": [],
    "NetworkInformation": [],
    "NodeList": [],
    "Notification": ["Notification", 1],
    "OffscreenCanvasRenderingContext2D": [],
    "Path2D": ["Path2D"],
    "Performance": [],
    "PerformanceEntry": [],
    "PerformancePaintTiming": [],
    "Plugin": [],
    "PluginArray": [],
    "PointerEvent": ["PointerEvent", 1],
    "Request": ["Request", 1],
    "Screen": [],
    "ScreenOrientation": [],
    "SpeechSynthesisUtterance": ["SpeechSynthesisUtterance"],
    "Storage": [],
    "Text": ["Text"],
    "UIEvent": ["UIEvent", 1],
    "WebGLBuffer": [],
    "WebGLProgram": [],
    "WebGLShader": [],
    "WebGLShaderPrecisionFormat": [],
    "WebGLUniformLocation": [],
    "Location": [],
    "WebSocket": ["WebSocket", 1],
    "Window": [],
    "XMLHttpRequest": ["XMLHttpRequest"],
    "XMLHttpRequestEventTarget": [],
    "XMLHttpRequestUpload": [],
    "Permissions": [],
    "NavigatorUAData": [],
    "EventCounts": [],
    "PerformanceNavigation": [],
    "PerformanceTiming": [],
    "Option": ["Option"],
    "Image": ["Image"],
    "Audio": ["Audio"],
    "XSLTProcessor": ["XSLTProcessor"],
    "XPathResult": [],
    "XPathExpression": [],
    "XPathEvaluator": ["XPathEvaluator"],
    "XMLSerializer": ["XMLSerializer"],
    "XMLDocument": [],
    "WritableStreamDefaultWriter": ["WritableStreamDefaultWriter", 1],
    "WritableStreamDefaultController": [],
    "WritableStream": ["WritableStream"],
    "Worker": ["Worker", 1],
    "WheelEvent": ["WheelEvent", 1],
    "WebGLVertexArrayObject": [],
    "WebGLTransformFeedback": [],
    "WebGLTexture": [],
    "WebGLSync": [],
    "WebGLSampler": [],
    "WebGLRenderbuffer": [],
    "WebGLQuery": [],
    "WebGLFramebuffer": [],
    "WebGLContextEvent": ["WebGLContextEvent", 1],
    "WebGLActiveInfo": [],
    "WebGL2RenderingContext": [],
    "WaveShaperNode": ["WaveShaperNode", 1],
    "VisualViewport": [],
    "VirtualKeyboardGeometryChangeEvent": ["VirtualKeyboardGeometryChangeEvent", 1],
    "ValidityState": [],
    "VTTCue": ["VTTCue"],
    "UserActivation": [],
    "URLSearchParams": ["URLSearchParams"],
    "URLPattern": ["URLPattern"],
    "TrustedTypePolicyFactory": [],
    "TrustedTypePolicy": [],
    "TrustedScriptURL": [],
    "TrustedScript": [],
    "TrustedHTML": [],
    "TreeWalker": [],
    "TransitionEvent": ["TransitionEvent", 1],
    "TransformStreamDefaultController": [],
    "TransformStream": ["TransformStream"],
    "TrackEvent": ["TrackEvent", 1],
    "TouchList": [],
    "Touch": ["Touch", 1],
    "TimeRanges": [],
    "TextTrackList": [],
    "TextTrackCueList": [],
    "TextTrackCue": [],
    "TextTrack": [],
    "TextMetrics": [],
    "TextEvent": [],
    "TextEncoderStream": ["TextEncoderStream"],
    "TextEncoder": ["TextEncoder"],
    "TextDecoderStream": ["TextDecoderStream"],
    "TextDecoder": ["TextDecoder"],
    "TaskSignal": [],
    "TaskPriorityChangeEvent": ["TaskPriorityChangeEvent"],
    "TaskController": ["TaskController"],
    "TaskAttributionTiming": [],
    "SyncManager": [],
    "SubmitEvent": ["SubmitEvent", 1],
    "StyleSheetList": [],
    "StyleSheet": [],
    "StylePropertyMapReadOnly": [],
    "StylePropertyMap": [],
    "StorageEvent": ["StorageEvent", 1],
    "StereoPannerNode": ["StereoPannerNode", 1],
    "StaticRange": ["StaticRange", 1],
    "ShadowRoot": [],
    "Selection": [],
    "SecurityPolicyViolationEvent": ["SecurityPolicyViolationEvent", 1],
    "ScriptProcessorNode": [],
    "Scheduling": [],
    "Scheduler": [],
    "SVGViewElement": [],
    "SVGUseElement": [],
    "SVGUnitTypes": [],
    "SVGTransformList": [],
    "SVGTransform": [],
    "SVGTitleElement": [],
    "SVGTextPositioningElement": [],
    "SVGTextPathElement": [],
    "SVGTextElement": [],
    "SVGTextContentElement": [],
    "SVGTSpanElement": [],
    "SVGSymbolElement": [],
    "SVGSwitchElement": [],
    "SVGStyleElement": [],
    "SVGStringList": [],
    "SVGStopElement": [],
    "SVGSetElement": [],
    "SVGScriptElement": [],
    "SVGSVGElement": [],
    "SVGRectElement": [],
    "SVGRect": [],
    "SVGRadialGradientElement": [],
    "SVGPreserveAspectRatio": [],
    "SVGPolylineElement": [],
    "SVGPolygonElement": [],
    "SVGPointList": [],
    "SVGPoint": [],
    "SVGPatternElement": [],
    "SVGPathElement": [],
    "SVGNumberList": [],
    "SVGNumber": [],
    "SVGMetadataElement": [],
    "SVGMatrix": [],
    "SVGMaskElement": [],
    "SVGMarkerElement": [],
    "SVGMPathElement": [],
    "SVGLinearGradientElement": [],
    "SVGLineElement": [],
    "SVGLengthList": [],
    "SVGLength": [],
    "SVGImageElement": [],
    "SVGGraphicsElement": [],
    "SVGGradientElement": [],
    "SVGGeometryElement": [],
    "SVGGElement": [],
    "SVGForeignObjectElement": [],
    "SVGFilterElement": [],
    "SVGFETurbulenceElement": [],
    "SVGFETileElement": [],
    "SVGFESpotLightElement": [],
    "SVGFESpecularLightingElement": [],
    "SVGFEPointLightElement": [],
    "SVGFEOffsetElement": [],
    "SVGFEMorphologyElement": [],
    "SVGFEMergeNodeElement": [],
    "SVGFEMergeElement": [],
    "SVGFEImageElement": [],
    "SVGFEGaussianBlurElement": [],
    "SVGFEFuncRElement": [],
    "SVGFEFuncGElement": [],
    "SVGFEFuncBElement": [],
    "SVGFEFuncAElement": [],
    "SVGFEFloodElement": [],
    "SVGFEDropShadowElement": [],
    "SVGFEDistantLightElement": [],
    "SVGFEDisplacementMapElement": [],
    "SVGFEDiffuseLightingElement": [],
    "SVGFEConvolveMatrixElement": [],
    "SVGFECompositeElement": [],
    "SVGFEComponentTransferElement": [],
    "SVGFEColorMatrixElement": [],
    "SVGFEBlendElement": [],
    "SVGEllipseElement": [],
    "SVGElement": [],
    "SVGDescElement": [],
    "SVGDefsElement": [],
    "SVGComponentTransferFunctionElement": [],
    "SVGClipPathElement": [],
    "SVGCircleElement": [],
    "SVGAnimationElement": [],
    "SVGAnimatedTransformList": [],
    "SVGAnimatedString": [],
    "SVGAnimatedRect": [],
    "SVGAnimatedPreserveAspectRatio": [],
    "SVGAnimatedNumberList": [],
    "SVGAnimatedNumber": [],
    "SVGAnimatedLengthList": [],
    "SVGAnimatedLength": [],
    "SVGAnimatedInteger": [],
    "SVGAnimatedEnumeration": [],
    "SVGAnimatedBoolean": [],
    "SVGAnimatedAngle": [],
    "SVGAnimateTransformElement": [],
    "SVGAnimateMotionElement": [],
    "SVGAnimateElement": [],
    "SVGAngle": [],
    "SVGAElement": [],
    "Response": ["Response"],
    "ResizeObserverSize": [],
    "ResizeObserverEntry": [],
    "ResizeObserver": ["ResizeObserver", 1],
    "ReportingObserver": ["ReportingObserver", 1],
    "ReadableStreamDefaultReader": ["ReadableStreamDefaultReader", 1],
    "ReadableStreamDefaultController": [],
    "ReadableStreamBYOBRequest": [],
    "ReadableStreamBYOBReader": ["ReadableStreamBYOBReader", 1],
    "ReadableStream": ["ReadableStream"],
    "ReadableByteStreamController": [],
    "Range": ["Range"],
    "RadioNodeList": [],
    "RTCTrackEvent": ["RTCTrackEvent"],
    "RTCStatsReport": [],
    "RTCSessionDescription": ["RTCSessionDescription"],
    "RTCSctpTransport": [],
    "RTCRtpTransceiver": [],
    "RTCRtpSender": [],
    "RTCRtpReceiver": [],
    "RTCPeerConnectionIceEvent": ["RTCPeerConnectionIceEvent", 1],
    "RTCPeerConnectionIceErrorEvent": ["RTCPeerConnectionIceErrorEvent"],
    "RTCIceTransport": [],
    "RTCIceCandidate": ["RTCIceCandidate"],
    "RTCErrorEvent": ["RTCErrorEvent"],
    "RTCError": ["RTCError", 1],
    "RTCEncodedVideoFrame": [],
    "RTCEncodedAudioFrame": [],
    "RTCDtlsTransport": [],
    "RTCDataChannelEvent": ["RTCDataChannelEvent"],
    "RTCDataChannel": [],
    "RTCDTMFToneChangeEvent": ["RTCDTMFToneChangeEvent"],
    "RTCDTMFSender": [],
    "RTCCertificate": [],
    "PromiseRejectionEvent": ["PromiseRejectionEvent"],
    "ProgressEvent": ["ProgressEvent", 1],
    "Profiler": ["Profiler", 1],
    "ProcessingInstruction": [],
    "PopStateEvent": ["PopStateEvent", 1],
    "PeriodicWave": ["PeriodicWave", 1],
    "PerformanceServerTiming": [],
    "PerformanceResourceTiming": [],
    "PerformanceObserverEntryList": [],
    "PerformanceObserver": ["PerformanceObserver", 1],
    "PerformanceNavigationTiming": [],
    "PerformanceMeasure": [],
    "PerformanceMark": ["PerformanceMark", 1],
    "PerformanceLongTaskTiming": [],
    "PerformanceEventTiming": [],
    "PerformanceElementTiming": [],
    "PannerNode": ["PannerNode", 1],
    "PageTransitionEvent": ["PageTransitionEvent", 1],
    "OverconstrainedError": ["OverconstrainedError"],
    "OscillatorNode": ["OscillatorNode", 1],
    "OffscreenCanvas": ["OffscreenCanvas"],
    "OfflineAudioContext": ["OfflineAudioContext", 1],
    "OfflineAudioCompletionEvent": ["OfflineAudioCompletionEvent"],
    "NodeIterator": [],
    "NamedNodeMap": [],
    "MutationRecord": [],
    "MutationEvent": [],
    "MessagePort": [],
    "MessageEvent": ["MessageEvent", 1],
    "MessageChannel": ["MessageChannel"],
    "MediaStreamTrackProcessor": ["MediaStreamTrackProcessor", 1],
    "MediaStreamTrackEvent": ["MediaStreamTrackEvent"],
    "MediaStreamEvent": ["MediaStreamEvent", 1],
    "MediaStreamAudioSourceNode": ["MediaStreamAudioSourceNode"],
    "MediaStreamAudioDestinationNode": ["MediaStreamAudioDestinationNode", 1],
    "MediaRecorder": ["MediaRecorder", 1],
    "MediaQueryListEvent": ["MediaQueryListEvent", 1],
    "MediaQueryList": [],
    "MediaList": [],
    "MediaError": [],
    "MediaElementAudioSourceNode": ["MediaElementAudioSourceNode"],
    "MediaCapabilities": [],
    "LayoutShiftAttribution": [],
    "LayoutShift": [],
    "LargestContentfulPaint": [],
    "KeyframeEffect": ["KeyframeEffect", 1],
    "KeyboardEvent": ["KeyboardEvent", 1],
    "IntersectionObserverEntry": [],
    "IntersectionObserver": ["IntersectionObserver", 1],
    "InputEvent": ["InputEvent", 1],
    "InputDeviceInfo": [],
    "ImageData": ["ImageData"],
    "ImageCapture": ["ImageCapture", 1],
    "ImageBitmapRenderingContext": [],
    "ImageBitmap": [],
    "IdleDeadline": [],
    "IIRFilterNode": ["IIRFilterNode"],
    "IDBVersionChangeEvent": ["IDBVersionChangeEvent", 1],
    "IDBTransaction": [],
    "IDBObjectStore": [],
    "IDBKeyRange": [],
    "IDBIndex": [],
    "IDBDatabase": [],
    "IDBCursorWithValue": [],
    "IDBCursor": [],
    "History": [],
    "Headers": ["Headers"],
    "HashChangeEvent": ["HashChangeEvent", 1],
    "HTMLOptionsCollection": [],
    "HTMLFormControlsCollection": [],
    "GeolocationPositionError": [],
    "GeolocationPosition": [],
    "GeolocationCoordinates": [],
    "Geolocation": [],
    "GamepadHapticActuator": [],
    "GamepadEvent": ["GamepadEvent", 1],
    "GamepadButton": [],
    "Gamepad": [],
    "GainNode": ["GainNode", 1],
    "FormDataEvent": ["FormDataEvent"],
    "FormData": ["FormData"],
    "FontFaceSetLoadEvent": ["FontFaceSetLoadEvent", 1],
    "FontFace": ["FontFace"],
    "FocusEvent": ["FocusEvent", 1],
    "FileReader": ["FileReader"],
    "FileList": [],
    "File": ["File"],
    "FeaturePolicy": [],
    "External": [],
    "EventSource": ["EventSource", 1],
    "ErrorEvent": ["ErrorEvent", 1],
    "ElementInternals": [],
    "DynamicsCompressorNode": ["DynamicsCompressorNode", 1],
    "DragEvent": ["DragEvent", 1],
    "DocumentFragment": ["DocumentFragment"],
    "DelayNode": ["DelayNode", 1],
    "DecompressionStream": ["DecompressionStream", 1],
    "DataTransferItemList": [],
    "DataTransferItem": [],
    "DataTransfer": ["DataTransfer"],
    "DOMTokenList": [],
    "DOMStringMap": [],
    "DOMStringList": [],
    "DOMRectReadOnly": ["DOMRectReadOnly"],
    "DOMRectList": [],
    "DOMRect": ["DOMRect"],
    "DOMQuad": ["DOMQuad"],
    "DOMPointReadOnly": ["DOMPointReadOnly"],
    "DOMPoint": ["DOMPoint"],
    "DOMMatrixReadOnly": ["DOMMatrixReadOnly"],
    "DOMImplementation": [],
    "DOMException": ["DOMException"],
    "DOMError": ["DOMError", 1],
    "CustomStateSet": [],
    "CustomEvent": ["CustomEvent", 1],
    "CustomElementRegistry": [],
    "Crypto": [],
    "CountQueuingStrategy": ["CountQueuingStrategy", 1],
    "ConvolverNode": ["ConvolverNode", 1],
    "ConstantSourceNode": ["ConstantSourceNode", 1],
    "CompressionStream": ["CompressionStream", 1],
    "CompositionEvent": ["CompositionEvent", 1],
    "Comment": ["Comment"],
    "CloseEvent": ["CloseEvent", 1],
    "ClipboardEvent": ["ClipboardEvent", 1],
    "ChannelSplitterNode": ["ChannelSplitterNode", 1],
    "ChannelMergerNode": ["ChannelMergerNode", 1],
    "CanvasPattern": [],
    "CanvasGradient": [],
    "CanvasFilter": ["CanvasFilter", 1],
    "CanvasCaptureMediaStreamTrack": [],
    "CSSVariableReferenceValue": ["CSSVariableReferenceValue", 1],
    "CSSUnparsedValue": ["CSSUnparsedValue", 1],
    "CSSUnitValue": ["CSSUnitValue"],
    "CSSTranslate": ["CSSTranslate"],
    "CSSTransformValue": ["CSSTransformValue", 1],
    "CSSTransformComponent": [],
    "CSSSupportsRule": [],
    "CSSStyleValue": [],
    "CSSStyleSheet": ["CSSStyleSheet"],
    "CSSStyleRule": [],
    "CSSSkewY": ["CSSSkewY", 1],
    "CSSSkewX": ["CSSSkewX", 1],
    "CSSSkew": ["CSSSkew"],
    "CSSScale": ["CSSScale"],
    "CSSRuleList": [],
    "CSSRule": [],
    "CSSRotate": ["CSSRotate", 1],
    "CSSPropertyRule": [],
    "CSSPositionValue": ["CSSPositionValue"],
    "CSSPerspective": ["CSSPerspective", 1],
    "CSSPageRule": [],
    "CSSNumericValue": [],
    "CSSNumericArray": [],
    "CSSNamespaceRule": [],
    "CSSMediaRule": [],
    "CSSMatrixComponent": ["CSSMatrixComponent", 1],
    "CSSMathValue": [],
    "CSSMathSum": ["CSSMathSum"],
    "CSSMathProduct": ["CSSMathProduct"],
    "CSSMathNegate": ["CSSMathNegate", 1],
    "CSSMathMin": ["CSSMathMin"],
    "CSSMathMax": ["CSSMathMax"],
    "CSSMathInvert": ["CSSMathInvert", 1],
    "CSSMathClamp": ["CSSMathClamp"],
    "CSSLayerStatementRule": [],
    "CSSLayerBlockRule": [],
    "CSSKeywordValue": ["CSSKeywordValue", 1],
    "CSSKeyframesRule": [],
    "CSSKeyframeRule": [],
    "CSSImportRule": [],
    "CSSImageValue": [],
    "CSSGroupingRule": [],
    "CSSFontFaceRule": [],
    "CSSCounterStyleRule": [],
    "CSSConditionRule": [],
    "CDATASection": [],
    "ByteLengthQueuingStrategy": ["ByteLengthQueuingStrategy", 1],
    "BroadcastChannel": ["BroadcastChannel", 1],
    "BlobEvent": ["BlobEvent"],
    "Blob": ["Blob"],
    "BiquadFilterNode": ["BiquadFilterNode", 1],
    "BeforeUnloadEvent": [],
    "BeforeInstallPromptEvent": ["BeforeInstallPromptEvent", 1],
    "BaseAudioContext": [],
    "BarProp": [],
    "AudioWorkletNode": ["AudioWorkletNode"],
    "AudioScheduledSourceNode": [],
    "AudioProcessingEvent": ["AudioProcessingEvent"],
    "AudioParamMap": [],
    "AudioParam": [],
    "AudioNode": [],
    "AudioListener": [],
    "AudioDestinationNode": [],
    "AudioContext": ["AudioContext"],
    "AudioBufferSourceNode": ["AudioBufferSourceNode", 1],
    "AudioBuffer": ["AudioBuffer", 1],
    "Attr": [],
    "AnimationEvent": ["AnimationEvent", 1],
    "AnimationEffect": [],
    "Animation": ["Animation"],
    "AnalyserNode": ["AnalyserNode", 1],
    "AbstractRange": [],
    "AbortSignal": [],
    "AbortController": ["AbortController"],
    "AbsoluteOrientationSensor": ["AbsoluteOrientationSensor"],
    "Accelerometer": ["Accelerometer"],
    "AudioWorklet": [],
    "Cache": [],
    "CacheStorage": [],
    "Clipboard": [],
    "ClipboardItem": ["ClipboardItem", 1],
    "CookieChangeEvent": ["CookieChangeEvent", 1],
    "CookieStore": [],
    "CookieStoreManager": [],
    "Credential": [],
    "CredentialsContainer": [],
    "CryptoKey": [],
    "DeviceMotionEvent": ["DeviceMotionEvent", 1],
    "DeviceMotionEventAcceleration": [],
    "DeviceMotionEventRotationRate": [],
    "DeviceOrientationEvent": ["DeviceOrientationEvent", 1],
    "FederatedCredential": ["FederatedCredential", 1],
    "GravitySensor": ["GravitySensor"],
    "Gyroscope": ["Gyroscope"],
    "Keyboard": [],
    "KeyboardLayoutMap": [],
    "LinearAccelerationSensor": ["LinearAccelerationSensor"],
    "Lock": [],
    "LockManager": [],
    "MIDIAccess": [],
    "MIDIConnectionEvent": ["MIDIConnectionEvent", 1],
    "MIDIInput": [],
    "MIDIInputMap": [],
    "MIDIMessageEvent": ["MIDIMessageEvent", 1],
    "MIDIOutput": [],
    "MIDIOutputMap": [],
    "MIDIPort": [],
    "MediaDeviceInfo": [],
    "MediaDevices": [],
    "MediaKeyMessageEvent": ["MediaKeyMessageEvent"],
    "MediaKeySession": [],
    "MediaKeyStatusMap": [],
    "MediaKeySystemAccess": [],
    "MediaKeys": [],
    "NavigationPreloadManager": [],
    "NavigatorManagedData": [],
    "OrientationSensor": [],
    "PasswordCredential": ["PasswordCredential", 1],
    "RelativeOrientationSensor": ["RelativeOrientationSensor"],
    "ScreenDetailed": [],
    "ScreenDetails": [],
    "Sensor": [],
    "SensorErrorEvent": ["SensorErrorEvent"],
    "ServiceWorker": [],
    "ServiceWorkerContainer": [],
    "ServiceWorkerRegistration": [],
    "StorageManager": [],
    "SubtleCrypto": [],
    "VirtualKeyboard": [],
    "WebTransport": ["WebTransport", 1],
    "WebTransportBidirectionalStream": [],
    "WebTransportDatagramDuplexStream": [],
    "WebTransportError": ["WebTransportError"],
    "Worklet": [],
    "XRDOMOverlayState": [],
    "XRLayer": [],
    "XRWebGLBinding": ["XRWebGLBinding"],
    "AudioData": ["AudioData", 1],
    "EncodedAudioChunk": ["EncodedAudioChunk", 1],
    "EncodedVideoChunk": ["EncodedVideoChunk", 1],
    "ImageTrack": [],
    "ImageTrackList": [],
    "VideoColorSpace": ["VideoColorSpace"],
    "VideoFrame": ["VideoFrame", 1],
    "AudioDecoder": ["AudioDecoder", 1],
    "AudioEncoder": ["AudioEncoder", 1],
    "ImageDecoder": ["ImageDecoder", 1],
    "VideoDecoder": ["VideoDecoder", 1],
    "VideoEncoder": ["VideoEncoder", 1],
    "AuthenticatorAssertionResponse": [],
    "AuthenticatorAttestationResponse": [],
    "AuthenticatorResponse": [],
    "PublicKeyCredential": [],
    "Bluetooth": [],
    "BluetoothCharacteristicProperties": [],
    "BluetoothDevice": [],
    "BluetoothRemoteGATTCharacteristic": [],
    "BluetoothRemoteGATTDescriptor": [],
    "BluetoothRemoteGATTServer": [],
    "BluetoothRemoteGATTService": [],
    "CaptureController": ["CaptureController"],
    "DelegatedInkTrailPresenter": [],
    "Ink": [],
    "EyeDropper": ["EyeDropper"],
    "FileSystemDirectoryHandle": [],
    "FileSystemFileHandle": [],
    "FileSystemHandle": [],
    "FileSystemWritableFileStream": [],
    "FontData": [],
    "FragmentDirective": [],
    "HID": [],
    "HIDConnectionEvent": ["HIDConnectionEvent"],
    "HIDDevice": [],
    "HIDInputReportEvent": [],
    "IdentityCredential": [],
    "LaunchParams": [],
    "LaunchQueue": [],
    "OTPCredential": [],
    "PaymentAddress": [],
    "PaymentRequest": ["PaymentRequest", 1],
    "PaymentResponse": [],
    "PaymentMethodChangeEvent": ["PaymentMethodChangeEvent", 1],
    "Presentation": [],
    "PresentationAvailability": [],
    "PresentationConnection": [],
    "PresentationConnectionAvailableEvent": ["PresentationConnectionAvailableEvent"],
    "PresentationConnectionCloseEvent": ["PresentationConnectionCloseEvent"],
    "PresentationConnectionList": [],
    "PresentationReceiver": [],
    "PresentationRequest": ["PresentationRequest", 1],
    "Sanitizer": ["Sanitizer"],
    "Serial": [],
    "SerialPort": [],
    "USB": [],
    "USBAlternateInterface": ["USBAlternateInterface"],
    "USBConfiguration": ["USBConfiguration"],
    "USBConnectionEvent": ["USBConnectionEvent"],
    "USBDevice": [],
    "USBEndpoint": ["USBEndpoint"],
    "USBInTransferResult": ["USBInTransferResult", 1],
    "USBInterface": ["USBInterface"],
    "USBIsochronousInTransferPacket": ["USBIsochronousInTransferPacket", 1],
    "USBIsochronousInTransferResult": ["USBIsochronousInTransferResult", 1],
    "USBIsochronousOutTransferPacket": ["USBIsochronousOutTransferPacket", 1],
    "USBIsochronousOutTransferResult": ["USBIsochronousOutTransferResult", 1],
    "USBOutTransferResult": ["USBOutTransferResult", 1],
    "WakeLock": [],
    "WakeLockSentinel": [],
    "WindowControlsOverlay": [],
    "WindowControlsOverlayGeometryChangeEvent": ["WindowControlsOverlayGeometryChangeEvent"],
    "XRAnchor": [],
    "XRAnchorSet": [],
    "XRBoundedReferenceSpace": [],
    "XRFrame": [],
    "XRInputSource": [],
    "XRInputSourceArray": [],
    "XRInputSourceEvent": ["XRInputSourceEvent"],
    "XRInputSourcesChangeEvent": ["XRInputSourcesChangeEvent"],
    "XRPose": [],
    "XRReferenceSpace": [],
    "XRReferenceSpaceEvent": ["XRReferenceSpaceEvent"],
    "XRRenderState": [],
    "XRRigidTransform": ["XRRigidTransform"],
    "XRSession": [],
    "XRSessionEvent": ["XRSessionEvent"],
    "XRSpace": [],
    "XRSystem": [],
    "XRView": [],
    "XRViewerPose": [],
    "XRViewport": [],
    "XRWebGLLayer": ["XRWebGLLayer"],
    "XRCPUDepthInformation": [],
    "XRDepthInformation": [],
    "XRWebGLDepthInformation": [],
    "XRCamera": [],
    "XRHand": [],
    "XRJointPose": [],
    "XRJointSpace": [],
    "XRHitTestResult": [],
    "XRHitTestSource": [],
    "XRRay": ["XRRay"],
    "XRTransientInputHitTestResult": [],
    "XRTransientInputHitTestSource": [],
    "XRLightEstimate": [],
    "XRLightProbe": [],
    "AnimationPlaybackEvent": ["AnimationPlaybackEvent", 1],
    "AnimationTimeline": [],
    "CSSAnimation": [],
    "CSSTransition": [],
    "DocumentTimeline": ["DocumentTimeline"],
    "BackgroundFetchManager": [],
    "BackgroundFetchRecord": [],
    "BackgroundFetchRegistration": [],
    "BluetoothUUID": [],
    "BrowserCaptureMediaStreamTrack": [],
    "CropTarget": [],
    "CSSContainerRule": [],
    "CSSFontPaletteValuesRule": [],
    "ContentVisibilityAutoStateChangeEvent": ["ContentVisibilityAutoStateChangeEvent", 1],
    "Highlight": ["Highlight"],
    "HighlightRegistry": [],
    "MathMLElement": [],
    "MediaMetadata": ["MediaMetadata"],
    "MediaSession": [],
    "MediaSource": ["MediaSource"],
    "SourceBuffer": [],
    "SourceBufferList": [],
    "MediaSourceHandle": [],
    "MediaStreamTrack": [],
    "MediaStreamTrackGenerator": ["MediaStreamTrackGenerator", 1],
    "NavigateEvent": ["NavigateEvent"],
    "Navigation": [],
    "NavigationCurrentEntryChangeEvent": ["NavigationCurrentEntryChangeEvent"],
    "NavigationDestination": [],
    "NavigationHistoryEntry": [],
    "NavigationTransition": [],
    "PaymentInstruments": [],
    "PaymentManager": [],
    "PaymentRequestUpdateEvent": ["PaymentRequestUpdateEvent", 1],
    "PeriodicSyncManager": [],
    "PermissionStatus": [],
    "PictureInPictureEvent": ["PictureInPictureEvent"],
    "PictureInPictureWindow": [],
    "PushManager": [],
    "PushSubscription": [],
    "PushSubscriptionOptions": [],
    "RemotePlayback": [],
    "SharedWorker": ["SharedWorker", 1],
    "SpeechSynthesisErrorEvent": ["SpeechSynthesisErrorEvent"],
    "SpeechSynthesisEvent": ["SpeechSynthesisEvent"],
    "TouchEvent": ["TouchEvent", 1],
    "VideoPlaybackQuality": [],
    "URL": ["URL", 1],
    "DOMMatrix": ["DOMMatrix"],
    "MediaStream": ["MediaStream"],
    "AudioSinkInfo": [],
    "ViewTransition": [],
};

globalMy.style = { accentColor: "", additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", animation: "", animationDelay: "", animationDirection: "", animationDuration: "", animationFillMode: "", animationIterationCount: "", animationName: "", animationPlayState: "", animationTimingFunction: "", appRegion: "", appearance: "", ascentOverride: "", aspectRatio: "", backdropFilter: "", backfaceVisibility: "", background: "", backgroundAttachment: "", backgroundBlendMode: "", backgroundClip: "", backgroundColor: "", backgroundImage: "", backgroundOrigin: "", backgroundPosition: "", backgroundPositionX: "", backgroundPositionY: "", backgroundRepeat: "", backgroundRepeatX: "", backgroundRepeatY: "", backgroundSize: "", basePalette: "", baselineShift: "", blockSize: "", border: "", borderBlock: "", borderBlockColor: "", borderBlockEnd: "", borderBlockEndColor: "", borderBlockEndStyle: "", borderBlockEndWidth: "", borderBlockStart: "", borderBlockStartColor: "", borderBlockStartStyle: "", borderBlockStartWidth: "", borderBlockStyle: "", borderBlockWidth: "", borderBottom: "", borderBottomColor: "", borderBottomLeftRadius: "", borderBottomRightRadius: "", borderBottomStyle: "", borderBottomWidth: "", borderCollapse: "", borderColor: "", borderEndEndRadius: "", borderEndStartRadius: "", borderImage: "", borderImageOutset: "", borderImageRepeat: "", borderImageSlice: "", borderImageSource: "", borderImageWidth: "", borderInline: "", borderInlineColor: "", borderInlineEnd: "", borderInlineEndColor: "", borderInlineEndStyle: "", borderInlineEndWidth: "", borderInlineStart: "", borderInlineStartColor: "", borderInlineStartStyle: "", borderInlineStartWidth: "", borderInlineStyle: "", borderInlineWidth: "", borderLeft: "", borderLeftColor: "", borderLeftStyle: "", borderLeftWidth: "", borderRadius: "", borderRight: "", borderRightColor: "", borderRightStyle: "", borderRightWidth: "", borderSpacing: "", borderStartEndRadius: "", borderStartStartRadius: "", borderStyle: "", borderTop: "", borderTopColor: "", borderTopLeftRadius: "", borderTopRightRadius: "", borderTopStyle: "", borderTopWidth: "", borderWidth: "", bottom: "", boxShadow: "", boxSizing: "", breakAfter: "", breakBefore: "", breakInside: "", bufferedRendering: "", captionSide: "", caretColor: "", clear: "", clip: "", clipPath: "", clipRule: "", color: "", colorInterpolation: "", colorInterpolationFilters: "", colorRendering: "", colorScheme: "", columnCount: "", columnFill: "", columnGap: "", columnRule: "", columnRuleColor: "", columnRuleStyle: "", columnRuleWidth: "", columnSpan: "", columnWidth: "", columns: "", contain: "", containIntrinsicBlockSize: "", containIntrinsicHeight: "", containIntrinsicInlineSize: "", containIntrinsicSize: "", containIntrinsicWidth: "", content: "", contentVisibility: "", counterIncrement: "", counterReset: "", counterSet: "", cursor: "", cx: "", cy: "", d: "", descentOverride: "", direction: "", display: "", dominantBaseline: "", emptyCells: "", fallback: "", fill: "", fillOpacity: "", fillRule: "", filter: "", flex: "", flexBasis: "", flexDirection: "", flexFlow: "", flexGrow: "", flexShrink: "", flexWrap: "", float: "", floodColor: "", floodOpacity: "", font: "", fontDisplay: "", fontFamily: "", fontFeatureSettings: "", fontKerning: "", fontOpticalSizing: "", fontPalette: "", fontSize: "", fontStretch: "", fontStyle: "", fontSynthesis: "", fontSynthesisSmallCaps: "", fontSynthesisStyle: "", fontSynthesisWeight: "", fontVariant: "", fontVariantCaps: "", fontVariantEastAsian: "", fontVariantLigatures: "", fontVariantNumeric: "", fontVariationSettings: "", fontWeight: "", forcedColorAdjust: "", gap: "", grid: "", gridArea: "", gridAutoColumns: "", gridAutoFlow: "", gridAutoRows: "", gridColumn: "", gridColumnEnd: "", gridColumnGap: "", gridColumnStart: "", gridGap: "", gridRow: "", gridRowEnd: "", gridRowGap: "", gridRowStart: "", gridTemplate: "", gridTemplateAreas: "", gridTemplateColumns: "", gridTemplateRows: "", height: "", hyphens: "", imageOrientation: "", imageRendering: "", inherits: "", initialValue: "", inlineSize: "", inset: "", insetBlock: "", insetBlockEnd: "", insetBlockStart: "", insetInline: "", insetInlineEnd: "", insetInlineStart: "", isolation: "", justifyContent: "", justifyItems: "", justifySelf: "", left: "", letterSpacing: "", lightingColor: "", lineBreak: "", lineGapOverride: "", lineHeight: "", listStyle: "", listStyleImage: "", listStylePosition: "", listStyleType: "", margin: "", marginBlock: "", marginBlockEnd: "", marginBlockStart: "", marginBottom: "", marginInline: "", marginInlineEnd: "", marginInlineStart: "", marginLeft: "", marginRight: "", marginTop: "", marker: "", markerEnd: "", markerMid: "", markerStart: "", mask: "", maskType: "", maxBlockSize: "", maxHeight: "", maxInlineSize: "", maxWidth: "", maxZoom: "", minBlockSize: "", minHeight: "", minInlineSize: "", minWidth: "", minZoom: "", mixBlendMode: "", negative: "", objectFit: "", objectPosition: "", offset: "", offsetDistance: "", offsetPath: "", offsetRotate: "", opacity: "", order: "", orientation: "", orphans: "", outline: "", outlineColor: "", outlineOffset: "", outlineStyle: "", outlineWidth: "", overflow: "", overflowAnchor: "", overflowClipMargin: "", overflowWrap: "", overflowX: "", overflowY: "", overrideColors: "", overscrollBehavior: "", overscrollBehaviorBlock: "", overscrollBehaviorInline: "", overscrollBehaviorX: "", overscrollBehaviorY: "", pad: "", padding: "", paddingBlock: "", paddingBlockEnd: "", paddingBlockStart: "", paddingBottom: "", paddingInline: "", paddingInlineEnd: "", paddingInlineStart: "", paddingLeft: "", paddingRight: "", paddingTop: "", page: "", pageBreakAfter: "", pageBreakBefore: "", pageBreakInside: "", pageOrientation: "", paintOrder: "", perspective: "", perspectiveOrigin: "", placeContent: "", placeItems: "", placeSelf: "", pointerEvents: "", position: "", prefix: "", quotes: "", r: "", range: "", resize: "", right: "", rowGap: "", rubyPosition: "", rx: "", ry: "", scrollBehavior: "", scrollMargin: "", scrollMarginBlock: "", scrollMarginBlockEnd: "", scrollMarginBlockStart: "", scrollMarginBottom: "", scrollMarginInline: "", scrollMarginInlineEnd: "", scrollMarginInlineStart: "", scrollMarginLeft: "", scrollMarginRight: "", scrollMarginTop: "", scrollPadding: "", scrollPaddingBlock: "", scrollPaddingBlockEnd: "", scrollPaddingBlockStart: "", scrollPaddingBottom: "", scrollPaddingInline: "", scrollPaddingInlineEnd: "", scrollPaddingInlineStart: "", scrollPaddingLeft: "", scrollPaddingRight: "", scrollPaddingTop: "", scrollSnapAlign: "", scrollSnapStop: "", scrollSnapType: "", scrollbarGutter: "", shapeImageThreshold: "", shapeMargin: "", shapeOutside: "", shapeRendering: "", size: "", sizeAdjust: "", speak: "", speakAs: "", src: "", stopColor: "", stopOpacity: "", stroke: "", strokeDasharray: "", strokeDashoffset: "", strokeLinecap: "", strokeLinejoin: "", strokeMiterlimit: "", strokeOpacity: "", strokeWidth: "", suffix: "", symbols: "", syntax: "", system: "", tabSize: "", tableLayout: "", textAlign: "", textAlignLast: "", textAnchor: "", textCombineUpright: "", textDecoration: "", textDecorationColor: "", textDecorationLine: "", textDecorationSkipInk: "", textDecorationStyle: "", textDecorationThickness: "", textEmphasis: "", textEmphasisColor: "", textEmphasisPosition: "", textEmphasisStyle: "", textIndent: "", textOrientation: "", textOverflow: "", textRendering: "", textShadow: "", textSizeAdjust: "", textTransform: "", textUnderlineOffset: "", textUnderlinePosition: "", top: "", touchAction: "", transform: "", transformBox: "", transformOrigin: "", transformStyle: "", transition: "", transitionDelay: "", transitionDuration: "", transitionProperty: "", transitionTimingFunction: "", unicodeBidi: "", unicodeRange: "", userSelect: "", userZoom: "", vectorEffect: "", verticalAlign: "", visibility: "", webkitAlignContent: "", webkitAlignItems: "", webkitAlignSelf: "", webkitAnimation: "", webkitAnimationDelay: "", webkitAnimationDirection: "", webkitAnimationDuration: "", webkitAnimationFillMode: "", webkitAnimationIterationCount: "", webkitAnimationName: "", webkitAnimationPlayState: "", webkitAnimationTimingFunction: "", webkitAppRegion: "", webkitAppearance: "", webkitBackfaceVisibility: "", webkitBackgroundClip: "", webkitBackgroundOrigin: "", webkitBackgroundSize: "", webkitBorderAfter: "", webkitBorderAfterColor: "", webkitBorderAfterStyle: "", webkitBorderAfterWidth: "", webkitBorderBefore: "", webkitBorderBeforeColor: "", webkitBorderBeforeStyle: "", webkitBorderBeforeWidth: "", webkitBorderBottomLeftRadius: "", webkitBorderBottomRightRadius: "", webkitBorderEnd: "", webkitBorderEndColor: "", webkitBorderEndStyle: "", webkitBorderEndWidth: "", webkitBorderHorizontalSpacing: "", webkitBorderImage: "", webkitBorderRadius: "", webkitBorderStart: "", webkitBorderStartColor: "", webkitBorderStartStyle: "", webkitBorderStartWidth: "", webkitBorderTopLeftRadius: "", webkitBorderTopRightRadius: "", webkitBorderVerticalSpacing: "", webkitBoxAlign: "", webkitBoxDecorationBreak: "", webkitBoxDirection: "", webkitBoxFlex: "", webkitBoxOrdinalGroup: "", webkitBoxOrient: "", webkitBoxPack: "", webkitBoxReflect: "", webkitBoxShadow: "", webkitBoxSizing: "", webkitClipPath: "", webkitColumnBreakAfter: "", webkitColumnBreakBefore: "", webkitColumnBreakInside: "", webkitColumnCount: "", webkitColumnGap: "", webkitColumnRule: "", webkitColumnRuleColor: "", webkitColumnRuleStyle: "", webkitColumnRuleWidth: "", webkitColumnSpan: "", webkitColumnWidth: "", webkitColumns: "", webkitFilter: "", webkitFlex: "", webkitFlexBasis: "", webkitFlexDirection: "", webkitFlexFlow: "", webkitFlexGrow: "", webkitFlexShrink: "", webkitFlexWrap: "", webkitFontFeatureSettings: "", webkitFontSmoothing: "", webkitHighlight: "", webkitHyphenateCharacter: "", webkitJustifyContent: "", webkitLineBreak: "", webkitLineClamp: "", webkitLocale: "", webkitLogicalHeight: "", webkitLogicalWidth: "", webkitMarginAfter: "", webkitMarginBefore: "", webkitMarginEnd: "", webkitMarginStart: "", webkitMask: "", webkitMaskBoxImage: "", webkitMaskBoxImageOutset: "", webkitMaskBoxImageRepeat: "", webkitMaskBoxImageSlice: "", webkitMaskBoxImageSource: "", webkitMaskBoxImageWidth: "", webkitMaskClip: "", webkitMaskComposite: "", webkitMaskImage: "", webkitMaskOrigin: "", webkitMaskPosition: "", webkitMaskPositionX: "", webkitMaskPositionY: "", webkitMaskRepeat: "", webkitMaskRepeatX: "", webkitMaskRepeatY: "", webkitMaskSize: "", webkitMaxLogicalHeight: "", webkitMaxLogicalWidth: "", webkitMinLogicalHeight: "", webkitMinLogicalWidth: "", webkitOpacity: "", webkitOrder: "", webkitPaddingAfter: "", webkitPaddingBefore: "", webkitPaddingEnd: "", webkitPaddingStart: "", webkitPerspective: "", webkitPerspectiveOrigin: "", webkitPerspectiveOriginX: "", webkitPerspectiveOriginY: "", webkitPrintColorAdjust: "", webkitRtlOrdering: "", webkitRubyPosition: "", webkitShapeImageThreshold: "", webkitShapeMargin: "", webkitShapeOutside: "", webkitTapHighlightColor: "", webkitTextCombine: "", webkitTextDecorationsInEffect: "", webkitTextEmphasis: "", webkitTextEmphasisColor: "", webkitTextEmphasisPosition: "", webkitTextEmphasisStyle: "", webkitTextFillColor: "", webkitTextOrientation: "", webkitTextSecurity: "", webkitTextSizeAdjust: "", webkitTextStroke: "", webkitTextStrokeColor: "", webkitTextStrokeWidth: "", webkitTransform: "", webkitTransformOrigin: "", webkitTransformOriginX: "", webkitTransformOriginY: "", webkitTransformOriginZ: "", webkitTransformStyle: "", webkitTransition: "", webkitTransitionDelay: "", webkitTransitionDuration: "", webkitTransitionProperty: "", webkitTransitionTimingFunction: "", webkitUserDrag: "", webkitUserModify: "", webkitUserSelect: "", webkitWritingMode: "", whiteSpace: "", widows: "", width: "", willChange: "", wordBreak: "", wordSpacing: "", wordWrap: "", writingMode: "", x: "", y: "", zIndex: "", zoom: "", };