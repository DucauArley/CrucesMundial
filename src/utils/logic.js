const combinaciones = {
  1:["3E", "3J", "3I", "3F", "3H", "3G", "3L", "3K"],
2:["3H", "3G", "3I", "3D", "3J", "3F", "3L", "3K"],
3:["3E", "3J", "3I", "3D", "3H", "3G", "3L", "3K"],
4:["3E", "3J", "3I", "3D", "3H", "3F", "3L", "3K"],
5:["3E", "3G", "3I", "3D", "3J", "3F", "3L", "3K"],
6:["3E", "3G", "3J", "3D", "3H", "3F", "3L", "3K"],
7:["3E", "3G", "3I", "3D", "3H", "3F", "3L", "3K"],
8:["3E", "3G", "3J", "3D", "3H", "3F", "3L", "3I"],
9:["3E", "3G", "3J", "3D", "3H", "3F", "3I", "3K"],
10:["3H", "3G", "3I", "3C", "3J", "3F", "3L", "3K"],
11:["3E", "3J", "3I", "3C", "3H", "3G", "3L", "3K"],
12:["3E", "3J", "3I", "3C", "3H", "3F", "3L", "3K"],
13:["3E", "3G", "3I", "3C", "3J", "3F", "3L", "3K"],
14:["3E", "3G", "3J", "3C", "3H", "3F", "3L", "3K"],
15:["3E", "3G", "3I", "3C", "3H", "3F", "3L", "3K"],
16:["3E", "3G", "3J", "3C", "3H", "3F", "3L", "3I"],
17:["3E", "3G", "3J", "3C", "3H", "3F", "3I", "3K"],
18:["3H", "3G", "3I", "3C", "3J", "3D", "3L", "3K"],
19:["3C", "3J", "3I", "3D", "3H", "3F", "3L", "3K"],
20:["3C", "3G", "3I", "3D", "3J", "3F", "3L", "3K"],
21:["3C", "3G", "3J", "3D", "3H", "3F", "3L", "3K"],
22:["3C", "3G", "3I", "3D", "3H", "3F", "3L", "3K"],
23:["3C", "3G", "3J", "3D", "3H", "3F", "3L", "3I"],
24:["3C", "3G", "3J", "3D", "3H", "3F", "3I", "3K"],
25:["3E", "3J", "3I", "3C", "3H", "3D", "3L", "3K"],
26:["3E", "3G", "3I", "3C", "3J", "3D", "3L", "3K"],
27:["3E", "3G", "3J", "3C", "3H", "3D", "3L", "3K"],
28:["3E", "3G", "3I", "3C", "3H", "3D", "3L", "3K"],
29:["3E", "3G", "3J", "3C", "3H", "3D", "3L", "3I"],
30:["3E", "3G", "3J", "3C", "3H", "3D", "3I", "3K"],
31:["3C", "3J", "3E", "3D", "3I", "3F", "3L", "3K"],
32:["3C", "3J", "3E", "3D", "3H", "3F", "3L", "3K"],
33:["3C", "3E", "3I", "3D", "3H", "3F", "3L", "3K"],
34:["3C", "3J", "3E", "3D", "3H", "3F", "3L", "3I"],
35:["3C", "3J", "3E", "3D", "3H", "3F", "3I", "3K"],
36:["3C", "3G", "3E", "3D", "3J", "3F", "3L", "3K"],
37:["3C", "3G", "3E", "3D", "3I", "3F", "3L", "3K"],
38:["3C", "3G", "3E", "3D", "3J", "3F", "3L", "3I"],
39:["3C", "3G", "3E", "3D", "3J", "3F", "3I", "3K"],
40:["3C", "3G", "3E", "3D", "3H", "3F", "3L", "3K"],
41:["3C", "3G", "3J", "3D", "3H", "3F", "3L", "3E"],
42:["3C", "3G", "3J", "3D", "3H", "3F", "3E", "3K"],
43:["3C", "3G", "3E", "3D", "3H", "3F", "3L", "3I"],
44:["3C", "3G", "3E", "3D", "3H", "3F", "3I", "3K"],
45:["3C", "3G", "3J", "3D", "3H", "3F", "3E", "3I"],
46:["3H", "3J", "3B", "3F", "3I", "3G", "3L", "3K"],
47:["3E", "3J", "3I", "3B", "3H", "3G", "3L", "3K"],
48:["3E", "3J", "3B", "3F", "3I", "3H", "3L", "3K"],
49:["3E", "3J", "3B", "3F", "3I", "3G", "3L", "3K"],
50:["3E", "3J", "3B", "3F", "3H", "3G", "3L", "3K"],
51:["3E", "3G", "3B", "3F", "3I", "3H", "3L", "3K"],
52:["3E", "3J", "3B", "3F", "3H", "3G", "3L", "3I"],
53:["3E", "3J", "3B", "3F", "3H", "3G", "3I", "3K"],
54:["3H", "3J", "3B", "3D", "3I", "3G", "3L", "3K"],
55:["3H", "3J", "3B", "3D", "3I", "3F", "3L", "3K"],
56:["3I", "3G", "3B", "3D", "3J", "3F", "3L", "3K"],
57:["3H", "3G", "3B", "3D", "3J", "3F", "3L", "3K"],
58:["3H", "3G", "3B", "3D", "3I", "3F", "3L", "3K"],
59:["3H", "3G", "3B", "3D", "3J", "3F", "3L", "3I"],
60:["3H", "3G", "3B", "3D", "3J", "3F", "3I", "3K"],
61:["3E", "3J", "3B", "3D", "3I", "3H", "3L", "3K"],
62:["3E", "3J", "3B", "3D", "3I", "3G", "3L", "3K"],
63:["3E", "3J", "3B", "3D", "3H", "3G", "3L", "3K"],
64:["3E", "3G", "3B", "3D", "3I", "3H", "3L", "3K"],
65:["3E", "3J", "3B", "3D", "3H", "3G", "3L", "3I"],
66:["3E", "3J", "3B", "3D", "3H", "3G", "3I", "3K"],
67:["3E", "3J", "3B", "3D", "3I", "3F", "3L", "3K"],
68:["3E", "3J", "3B", "3D", "3H", "3F", "3L", "3K"],
69:["3E", "3I", "3B", "3D", "3H", "3F", "3L", "3K"],
70:["3E", "3J", "3B", "3D", "3H", "3F", "3L", "3I"],
71:["3E", "3J", "3B", "3D", "3H", "3F", "3I", "3K"],
72:["3E", "3G", "3B", "3D", "3J", "3F", "3L", "3K"],
73:["3E", "3G", "3B", "3D", "3I", "3F", "3L", "3K"],
74:["3E", "3G", "3B", "3D", "3J", "3F", "3L", "3I"],
75:["3E", "3G", "3B", "3D", "3J", "3F", "3I", "3K"],
76:["3E", "3G", "3B", "3D", "3H", "3F", "3L", "3K"],
77:["3H", "3G", "3B", "3D", "3J", "3F", "3L", "3E"],
78:["3H", "3G", "3B", "3D", "3J", "3F", "3E", "3K"],
79:["3E", "3G", "3B", "3D", "3H", "3F", "3L", "3I"],
80:["3E", "3G", "3B", "3D", "3H", "3F", "3I", "3K"],
81:["3H", "3G", "3B", "3D", "3J", "3F", "3E", "3I"],
82:["3H", "3J", "3B", "3C", "3I", "3G", "3L", "3K"],
83:["3H", "3J", "3B", "3C", "3I", "3F", "3L", "3K"],
84:["3I", "3G", "3B", "3C", "3J", "3F", "3L", "3K"],
85:["3H", "3G", "3B", "3C", "3J", "3F", "3L", "3K"],
86:["3H", "3G", "3B", "3C", "3I", "3F", "3L", "3K"],
87:["3H", "3G", "3B", "3C", "3J", "3F", "3L", "3I"],
88:["3H", "3G", "3B", "3C", "3J", "3F", "3I", "3K"],
89:["3E", "3J", "3B", "3C", "3I", "3H", "3L", "3K"],
90:["3E", "3J", "3B", "3C", "3I", "3G", "3L", "3K"],
91:["3E", "3J", "3B", "3C", "3H", "3G", "3L", "3K"],
92:["3E", "3G", "3B", "3C", "3I", "3H", "3L", "3K"],
93:["3E", "3J", "3B", "3C", "3H", "3G", "3L", "3I"],
94:["3E", "3J", "3B", "3C", "3H", "3G", "3I", "3K"],
95:["3E", "3J", "3B", "3C", "3I", "3F", "3L", "3K"],
96:["3E", "3J", "3B", "3C", "3H", "3F", "3L", "3K"],
97:["3E", "3I", "3B", "3C", "3H", "3F", "3L", "3K"],
98:["3E", "3J", "3B", "3C", "3H", "3F", "3L", "3I"],
99:["3E", "3J", "3B", "3C", "3H", "3F", "3I", "3K"],
100:["3E", "3G", "3B", "3C", "3J", "3F", "3L", "3K"],
101:["3E", "3G", "3B", "3C", "3I", "3F", "3L", "3K"],
102:["3E", "3G", "3B", "3C", "3J", "3F", "3L", "3I"],
103:["3E", "3G", "3B", "3C", "3J", "3F", "3I", "3K"],
104:["3E", "3G", "3B", "3C", "3H", "3F", "3L", "3K"],
105:["3H", "3G", "3B", "3C", "3J", "3F", "3L", "3E"],
106:["3H", "3G", "3B", "3C", "3J", "3F", "3E", "3K"],
107:["3E", "3G", "3B", "3C", "3H", "3F", "3L", "3I"],
108:["3E", "3G", "3B", "3C", "3H", "3F", "3I", "3K"],
109:["3H", "3G", "3B", "3C", "3J", "3F", "3E", "3I"],
110:["3H", "3J", "3B", "3C", "3I", "3D", "3L", "3K"],
111:["3I", "3G", "3B", "3C", "3J", "3D", "3L", "3K"],
112:["3H", "3G", "3B", "3C", "3J", "3D", "3L", "3K"],
113:["3H", "3G", "3B", "3C", "3I", "3D", "3L", "3K"],
114:["3H", "3G", "3B", "3C", "3J", "3D", "3L", "3I"],
115:["3H", "3G", "3B", "3C", "3J", "3D", "3I", "3K"],
116:["3C", "3J", "3B", "3D", "3I", "3F", "3L", "3K"],
117:["3C", "3J", "3B", "3D", "3H", "3F", "3L", "3K"],
118:["3C", "3I", "3B", "3D", "3H", "3F", "3L", "3K"],
119:["3C", "3J", "3B", "3D", "3H", "3F", "3L", "3I"],
120:["3C", "3J", "3B", "3D", "3H", "3F", "3I", "3K"],
121:["3C", "3G", "3B", "3D", "3J", "3F", "3L", "3K"],
122:["3C", "3G", "3B", "3D", "3I", "3F", "3L", "3K"],
123:["3C", "3G", "3B", "3D", "3J", "3F", "3L", "3I"],
124:["3C", "3G", "3B", "3D", "3J", "3F", "3I", "3K"],
125:["3C", "3G", "3B", "3D", "3H", "3F", "3L", "3K"],
126:["3C", "3G", "3B", "3D", "3H", "3F", "3L", "3J"],
127:["3H", "3G", "3B", "3C", "3J", "3F", "3D", "3K"],
128:["3C", "3G", "3B", "3D", "3H", "3F", "3L", "3I"],
129:["3C", "3G", "3B", "3D", "3H", "3F", "3I", "3K"],
130:["3H", "3G", "3B", "3C", "3J", "3F", "3D", "3I"],
131:["3E", "3J", "3B", "3C", "3I", "3D", "3L", "3K"],
132:["3E", "3J", "3B", "3C", "3H", "3D", "3L", "3K"],
133:["3E", "3I", "3B", "3C", "3H", "3D", "3L", "3K"],
134:["3E", "3J", "3B", "3C", "3H", "3D", "3L", "3I"],
135:["3E", "3J", "3B", "3C", "3H", "3D", "3I", "3K"],
136:["3E", "3G", "3B", "3C", "3J", "3D", "3L", "3K"],
137:["3E", "3G", "3B", "3C", "3I", "3D", "3L", "3K"],
138:["3E", "3G", "3B", "3C", "3J", "3D", "3L", "3I"],
139:["3E", "3G", "3B", "3C", "3J", "3D", "3I", "3K"],
140:["3E", "3G", "3B", "3C", "3H", "3D", "3L", "3K"],
141:["3H", "3G", "3B", "3C", "3J", "3D", "3L", "3E"],
142:["3H", "3G", "3B", "3C", "3J", "3D", "3E", "3K"],
143:["3E", "3G", "3B", "3C", "3H", "3D", "3L", "3I"],
144:["3E", "3G", "3B", "3C", "3H", "3D", "3I", "3K"],
145:["3H", "3G", "3B", "3C", "3J", "3D", "3E", "3I"],
146:["3C", "3J", "3B", "3D", "3E", "3F", "3L", "3K"],
147:["3C", "3E", "3B", "3D", "3I", "3F", "3L", "3K"],
148:["3C", "3J", "3B", "3D", "3E", "3F", "3L", "3I"],
149:["3C", "3J", "3B", "3D", "3E", "3F", "3I", "3K"],
150:["3C", "3E", "3B", "3D", "3H", "3F", "3L", "3K"],
151:["3C", "3J", "3B", "3D", "3H", "3F", "3L", "3E"],
152:["3C", "3J", "3B", "3D", "3H", "3F", "3E", "3K"],
153:["3C", "3E", "3B", "3D", "3H", "3F", "3L", "3I"],
154:["3C", "3E", "3B", "3D", "3H", "3F", "3I", "3K"],
155:["3C", "3J", "3B", "3D", "3H", "3F", "3E", "3I"],
156:["3C", "3G", "3B", "3D", "3E", "3F", "3L", "3K"],
157:["3C", "3G", "3B", "3D", "3J", "3F", "3L", "3E"],
158:["3C", "3G", "3B", "3D", "3J", "3F", "3E", "3K"],
159:["3C", "3G", "3B", "3D", "3E", "3F", "3L", "3I"],
160:["3C", "3G", "3B", "3D", "3E", "3F", "3I", "3K"],
161:["3C", "3G", "3B", "3D", "3J", "3F", "3E", "3I"],
162:["3C", "3G", "3B", "3D", "3H", "3F", "3L", "3E"],
163:["3C", "3G", "3B", "3D", "3H", "3F", "3E", "3K"],
164:["3H", "3G", "3B", "3C", "3J", "3F", "3D", "3E"],
165:["3C", "3G", "3B", "3D", "3H", "3F", "3E", "3I"],
166:["3H", "3J", "3I", "3F", "3A", "3G", "3L", "3K"],
167:["3E", "3J", "3I", "3A", "3H", "3G", "3L", "3K"],
168:["3E", "3J", "3I", "3F", "3A", "3H", "3L", "3K"],
169:["3E", "3J", "3I", "3F", "3A", "3G", "3L", "3K"],
170:["3E", "3G", "3J", "3F", "3A", "3H", "3L", "3K"],
171:["3E", "3G", "3I", "3F", "3A", "3H", "3L", "3K"],
172:["3E", "3G", "3J", "3F", "3A", "3H", "3L", "3I"],
173:["3E", "3G", "3J", "3F", "3A", "3H", "3I", "3K"],
174:["3H", "3J", "3I", "3D", "3A", "3G", "3L", "3K"],
175:["3H", "3J", "3I", "3D", "3A", "3F", "3L", "3K"],
176:["3I", "3G", "3J", "3D", "3A", "3F", "3L", "3K"],
177:["3H", "3G", "3J", "3D", "3A", "3F", "3L", "3K"],
178:["3H", "3G", "3I", "3D", "3A", "3F", "3L", "3K"],
179:["3H", "3G", "3J", "3D", "3A", "3F", "3L", "3I"],
180:["3H", "3G", "3J", "3D", "3A", "3F", "3I", "3K"],
181:["3E", "3J", "3I", "3D", "3A", "3H", "3L", "3K"],
182:["3E", "3J", "3I", "3D", "3A", "3G", "3L", "3K"],
183:["3E", "3G", "3J", "3D", "3A", "3H", "3L", "3K"],
184:["3E", "3G", "3I", "3D", "3A", "3H", "3L", "3K"],
185:["3E", "3G", "3J", "3D", "3A", "3H", "3L", "3I"],
186:["3E", "3G", "3J", "3D", "3A", "3H", "3I", "3K"],
187:["3E", "3J", "3I", "3D", "3A", "3F", "3L", "3K"],
188:["3H", "3J", "3E", "3D", "3A", "3F", "3L", "3K"],
189:["3H", "3E", "3I", "3D", "3A", "3F", "3L", "3K"],
190:["3H", "3J", "3E", "3D", "3A", "3F", "3L", "3I"],
191:["3H", "3J", "3E", "3D", "3A", "3F", "3I", "3K"],
192:["3E", "3G", "3J", "3D", "3A", "3F", "3L", "3K"],
193:["3E", "3G", "3I", "3D", "3A", "3F", "3L", "3K"],
194:["3E", "3G", "3J", "3D", "3A", "3F", "3L", "3I"],
195:["3E", "3G", "3J", "3D", "3A", "3F", "3I", "3K"],
196:["3H", "3G", "3E", "3D", "3A", "3F", "3L", "3K"],
197:["3H", "3G", "3J", "3D", "3A", "3F", "3L", "3E"],
198:["3H", "3G", "3J", "3D", "3A", "3F", "3E", "3K"],
199:["3H", "3G", "3E", "3D", "3A", "3F", "3L", "3I"],
200:["3H", "3G", "3E", "3D", "3A", "3F", "3I", "3K"],
201:["3H", "3G", "3J", "3D", "3A", "3F", "3E", "3I"],
202:["3H", "3J", "3I", "3C", "3A", "3G", "3L", "3K"],
203:["3H", "3J", "3I", "3C", "3A", "3F", "3L", "3K"],
204:["3I", "3G", "3J", "3C", "3A", "3F", "3L", "3K"],
205:["3H", "3G", "3J", "3C", "3A", "3F", "3L", "3K"],
206:["3H", "3G", "3I", "3C", "3A", "3F", "3L", "3K"],
207:["3H", "3G", "3J", "3C", "3A", "3F", "3L", "3I"],
208:["3H", "3G", "3J", "3C", "3A", "3F", "3I", "3K"],
209:["3E", "3J", "3I", "3C", "3A", "3H", "3L", "3K"],
210:["3E", "3J", "3I", "3C", "3A", "3G", "3L", "3K"],
211:["3E", "3G", "3J", "3C", "3A", "3H", "3L", "3K"],
212:["3E", "3G", "3I", "3C", "3A", "3H", "3L", "3K"],
213:["3E", "3G", "3J", "3C", "3A", "3H", "3L", "3I"],
214:["3E", "3G", "3J", "3C", "3A", "3H", "3I", "3K"],
215:["3E", "3J", "3I", "3C", "3A", "3F", "3L", "3K"],
216:["3H", "3J", "3E", "3C", "3A", "3F", "3L", "3K"],
217:["3H", "3E", "3I", "3C", "3A", "3F", "3L", "3K"],
218:["3H", "3J", "3E", "3C", "3A", "3F", "3L", "3I"],
219:["3H", "3J", "3E", "3C", "3A", "3F", "3I", "3K"],
220:["3E", "3G", "3J", "3C", "3A", "3F", "3L", "3K"],
221:["3E", "3G", "3I", "3C", "3A", "3F", "3L", "3K"],
222:["3E", "3G", "3J", "3C", "3A", "3F", "3L", "3I"],
223:["3E", "3G", "3J", "3C", "3A", "3F", "3I", "3K"],
224:["3H", "3G", "3E", "3C", "3A", "3F", "3L", "3K"],
225:["3H", "3G", "3J", "3C", "3A", "3F", "3L", "3E"],
226:["3H", "3G", "3J", "3C", "3A", "3F", "3E", "3K"],
227:["3H", "3G", "3E", "3C", "3A", "3F", "3L", "3I"],
228:["3H", "3G", "3E", "3C", "3A", "3F", "3I", "3K"],
229:["3H", "3G", "3J", "3C", "3A", "3F", "3E", "3I"],
230:["3H", "3J", "3I", "3C", "3A", "3D", "3L", "3K"],
231:["3I", "3G", "3J", "3C", "3A", "3D", "3L", "3K"],
232:["3H", "3G", "3J", "3C", "3A", "3D", "3L", "3K"],
233:["3H", "3G", "3I", "3C", "3A", "3D", "3L", "3K"],
234:["3H", "3G", "3J", "3C", "3A", "3D", "3L", "3I"],
235:["3H", "3G", "3J", "3C", "3A", "3D", "3I", "3K"],
236:["3C", "3J", "3I", "3D", "3A", "3F", "3L", "3K"],
237:["3H", "3J", "3F", "3C", "3A", "3D", "3L", "3K"],
238:["3H", "3F", "3I", "3C", "3A", "3D", "3L", "3K"],
239:["3H", "3J", "3F", "3C", "3A", "3D", "3L", "3I"],
240:["3H", "3J", "3F", "3C", "3A", "3D", "3I", "3K"],
241:["3C", "3G", "3J", "3D", "3A", "3F", "3L", "3K"],
242:["3C", "3G", "3I", "3D", "3A", "3F", "3L", "3K"],
243:["3C", "3G", "3J", "3D", "3A", "3F", "3L", "3I"],
244:["3C", "3G", "3J", "3D", "3A", "3F", "3I", "3K"],
245:["3H", "3G", "3F", "3C", "3A", "3D", "3L", "3K"],
246:["3C", "3G", "3J", "3D", "3A", "3F", "3L", "3H"],
247:["3H", "3G", "3J", "3C", "3A", "3F", "3D", "3K"],
248:["3H", "3G", "3F", "3C", "3A", "3D", "3L", "3I"],
249:["3H", "3G", "3F", "3C", "3A", "3D", "3I", "3K"],
250:["3H", "3G", "3J", "3C", "3A", "3F", "3D", "3I"],
251:["3E", "3J", "3I", "3C", "3A", "3D", "3L", "3K"],
252:["3H", "3J", "3E", "3C", "3A", "3D", "3L", "3K"],
253:["3H", "3E", "3I", "3C", "3A", "3D", "3L", "3K"],
254:["3H", "3J", "3E", "3C", "3A", "3D", "3L", "3I"],
255:["3H", "3J", "3E", "3C", "3A", "3D", "3I", "3K"],
256:["3E", "3G", "3J", "3C", "3A", "3D", "3L", "3K"],
257:["3E", "3G", "3I", "3C", "3A", "3D", "3L", "3K"],
258:["3E", "3G", "3J", "3C", "3A", "3D", "3L", "3I"],
259:["3E", "3G", "3J", "3C", "3A", "3D", "3I", "3K"],
260:["3H", "3G", "3E", "3C", "3A", "3D", "3L", "3K"],
261:["3H", "3G", "3J", "3C", "3A", "3D", "3L", "3E"],
262:["3H", "3G", "3J", "3C", "3A", "3D", "3E", "3K"],
263:["3H", "3G", "3E", "3C", "3A", "3D", "3L", "3I"],
264:["3H", "3G", "3E", "3C", "3A", "3D", "3I", "3K"],
265:["3H", "3G", "3J", "3C", "3A", "3D", "3E", "3I"],
266:["3C", "3J", "3E", "3D", "3A", "3F", "3L", "3K"],
267:["3C", "3E", "3I", "3D", "3A", "3F", "3L", "3K"],
268:["3C", "3J", "3E", "3D", "3A", "3F", "3L", "3I"],
269:["3C", "3J", "3E", "3D", "3A", "3F", "3I", "3K"],
270:["3H", "3E", "3F", "3C", "3A", "3D", "3L", "3K"],
271:["3H", "3J", "3F", "3C", "3A", "3D", "3L", "3E"],
272:["3H", "3J", "3E", "3C", "3A", "3F", "3D", "3K"],
273:["3H", "3E", "3F", "3C", "3A", "3D", "3L", "3I"],
274:["3H", "3E", "3F", "3C", "3A", "3D", "3I", "3K"],
275:["3H", "3J", "3E", "3C", "3A", "3F", "3D", "3I"],
276:["3C", "3G", "3E", "3D", "3A", "3F", "3L", "3K"],
277:["3C", "3G", "3J", "3D", "3A", "3F", "3L", "3E"],
278:["3C", "3G", "3J", "3D", "3A", "3F", "3E", "3K"],
279:["3C", "3G", "3E", "3D", "3A", "3F", "3L", "3I"],
280:["3C", "3G", "3E", "3D", "3A", "3F", "3I", "3K"],
281:["3C", "3G", "3J", "3D", "3A", "3F", "3E", "3I"],
282:["3H", "3G", "3F", "3C", "3A", "3D", "3L", "3E"],
283:["3H", "3G", "3E", "3C", "3A", "3F", "3D", "3K"],
284:["3H", "3G", "3J", "3C", "3A", "3F", "3D", "3E"],
285:["3H", "3G", "3E", "3C", "3A", "3F", "3D", "3I"],
286:["3H", "3J", "3B", "3A", "3I", "3G", "3L", "3K"],
287:["3H", "3J", "3B", "3A", "3I", "3F", "3L", "3K"],
288:["3I", "3J", "3B", "3F", "3A", "3G", "3L", "3K"],
289:["3H", "3J", "3B", "3F", "3A", "3G", "3L", "3K"],
290:["3H", "3G", "3B", "3A", "3I", "3F", "3L", "3K"],
291:["3H", "3J", "3B", "3F", "3A", "3G", "3L", "3I"],
292:["3H", "3J", "3B", "3F", "3A", "3G", "3I", "3K"],
293:["3E", "3J", "3B", "3A", "3I", "3H", "3L", "3K"],
294:["3E", "3J", "3B", "3A", "3I", "3G", "3L", "3K"],
295:["3E", "3J", "3B", "3A", "3H", "3G", "3L", "3K"],
296:["3E", "3G", "3B", "3A", "3I", "3H", "3L", "3K"],
297:["3E", "3J", "3B", "3A", "3H", "3G", "3L", "3I"],
298:["3E", "3J", "3B", "3A", "3H", "3G", "3I", "3K"],
299:["3E", "3J", "3B", "3A", "3I", "3F", "3L", "3K"],
300:["3E", "3J", "3B", "3F", "3A", "3H", "3L", "3K"],
301:["3E", "3I", "3B", "3F", "3A", "3H", "3L", "3K"],
302:["3E", "3J", "3B", "3F", "3A", "3H", "3L", "3I"],
303:["3E", "3J", "3B", "3F", "3A", "3H", "3I", "3K"],
304:["3E", "3J", "3B", "3F", "3A", "3G", "3L", "3K"],
305:["3E", "3G", "3B", "3A", "3I", "3F", "3L", "3K"],
306:["3E", "3J", "3B", "3F", "3A", "3G", "3L", "3I"],
307:["3E", "3J", "3B", "3F", "3A", "3G", "3I", "3K"],
308:["3E", "3G", "3B", "3F", "3A", "3H", "3L", "3K"],
309:["3H", "3J", "3B", "3F", "3A", "3G", "3L", "3E"],
310:["3H", "3J", "3B", "3F", "3A", "3G", "3E", "3K"],
311:["3E", "3G", "3B", "3F", "3A", "3H", "3L", "3I"],
312:["3E", "3G", "3B", "3F", "3A", "3H", "3I", "3K"],
313:["3H", "3J", "3B", "3F", "3A", "3G", "3E", "3I"],
314:["3I", "3J", "3B", "3D", "3A", "3H", "3L", "3K"],
315:["3I", "3J", "3B", "3D", "3A", "3G", "3L", "3K"],
316:["3H", "3J", "3B", "3D", "3A", "3G", "3L", "3K"],
317:["3I", "3G", "3B", "3D", "3A", "3H", "3L", "3K"],
318:["3H", "3J", "3B", "3D", "3A", "3G", "3L", "3I"],
319:["3H", "3J", "3B", "3D", "3A", "3G", "3I", "3K"],
320:["3I", "3J", "3B", "3D", "3A", "3F", "3L", "3K"],
321:["3H", "3J", "3B", "3D", "3A", "3F", "3L", "3K"],
322:["3H", "3I", "3B", "3D", "3A", "3F", "3L", "3K"],
323:["3H", "3J", "3B", "3D", "3A", "3F", "3L", "3I"],
324:["3H", "3J", "3B", "3D", "3A", "3F", "3I", "3K"],
325:["3F", "3J", "3B", "3D", "3A", "3G", "3L", "3K"],
326:["3I", "3G", "3B", "3D", "3A", "3F", "3L", "3K"],
327:["3F", "3J", "3B", "3D", "3A", "3G", "3L", "3I"],
328:["3F", "3J", "3B", "3D", "3A", "3G", "3I", "3K"],
329:["3H", "3G", "3B", "3D", "3A", "3F", "3L", "3K"],
330:["3H", "3G", "3B", "3D", "3A", "3F", "3L", "3J"],
331:["3H", "3G", "3B", "3D", "3A", "3F", "3J", "3K"],
332:["3H", "3G", "3B", "3D", "3A", "3F", "3L", "3I"],
333:["3H", "3G", "3B", "3D", "3A", "3F", "3I", "3K"],
334:["3H", "3G", "3B", "3D", "3A", "3F", "3I", "3J"],
335:["3E", "3J", "3B", "3A", "3I", "3D", "3L", "3K"],
336:["3E", "3J", "3B", "3D", "3A", "3H", "3L", "3K"],
337:["3E", "3I", "3B", "3D", "3A", "3H", "3L", "3K"],
338:["3E", "3J", "3B", "3D", "3A", "3H", "3L", "3I"],
339:["3E", "3J", "3B", "3D", "3A", "3H", "3I", "3K"],
340:["3E", "3J", "3B", "3D", "3A", "3G", "3L", "3K"],
341:["3E", "3G", "3B", "3A", "3I", "3D", "3L", "3K"],
342:["3E", "3J", "3B", "3D", "3A", "3G", "3L", "3I"],
343:["3E", "3J", "3B", "3D", "3A", "3G", "3I", "3K"],
344:["3E", "3G", "3B", "3D", "3A", "3H", "3L", "3K"],
345:["3H", "3J", "3B", "3D", "3A", "3G", "3L", "3E"],
346:["3H", "3J", "3B", "3D", "3A", "3G", "3E", "3K"],
347:["3E", "3G", "3B", "3D", "3A", "3H", "3L", "3I"],
348:["3E", "3G", "3B", "3D", "3A", "3H", "3I", "3K"],
349:["3H", "3J", "3B", "3D", "3A", "3G", "3E", "3I"],
350:["3E", "3J", "3B", "3D", "3A", "3F", "3L", "3K"],
351:["3E", "3I", "3B", "3D", "3A", "3F", "3L", "3K"],
352:["3E", "3J", "3B", "3D", "3A", "3F", "3L", "3I"],
353:["3E", "3J", "3B", "3D", "3A", "3F", "3I", "3K"],
354:["3H", "3E", "3B", "3D", "3A", "3F", "3L", "3K"],
355:["3H", "3J", "3B", "3D", "3A", "3F", "3L", "3E"],
356:["3H", "3J", "3B", "3D", "3A", "3F", "3E", "3K"],
357:["3H", "3E", "3B", "3D", "3A", "3F", "3L", "3I"],
358:["3H", "3E", "3B", "3D", "3A", "3F", "3I", "3K"],
359:["3H", "3J", "3B", "3D", "3A", "3F", "3E", "3I"],
360:["3E", "3G", "3B", "3D", "3A", "3F", "3L", "3K"],
361:["3E", "3G", "3B", "3D", "3A", "3F", "3L", "3J"],
362:["3E", "3G", "3B", "3D", "3A", "3F", "3J", "3K"],
363:["3E", "3G", "3B", "3D", "3A", "3F", "3L", "3I"],
364:["3E", "3G", "3B", "3D", "3A", "3F", "3I", "3K"],
365:["3E", "3G", "3B", "3D", "3A", "3F", "3I", "3J"],
366:["3H", "3G", "3B", "3D", "3A", "3F", "3L", "3E"],
367:["3H", "3G", "3B", "3D", "3A", "3F", "3E", "3K"],
368:["3H", "3G", "3B", "3D", "3A", "3F", "3E", "3J"],
369:["3H", "3G", "3B", "3D", "3A", "3F", "3E", "3I"],
370:["3I", "3J", "3B", "3C", "3A", "3H", "3L", "3K"],
371:["3I", "3J", "3B", "3C", "3A", "3G", "3L", "3K"],
372:["3H", "3J", "3B", "3C", "3A", "3G", "3L", "3K"],
373:["3I", "3G", "3B", "3C", "3A", "3H", "3L", "3K"],
374:["3H", "3J", "3B", "3C", "3A", "3G", "3L", "3I"],
375:["3H", "3J", "3B", "3C", "3A", "3G", "3I", "3K"],
376:["3I", "3J", "3B", "3C", "3A", "3F", "3L", "3K"],
377:["3H", "3J", "3B", "3C", "3A", "3F", "3L", "3K"],
378:["3H", "3I", "3B", "3C", "3A", "3F", "3L", "3K"],
379:["3H", "3J", "3B", "3C", "3A", "3F", "3L", "3I"],
380:["3H", "3J", "3B", "3C", "3A", "3F", "3I", "3K"],
381:["3C", "3J", "3B", "3F", "3A", "3G", "3L", "3K"],
382:["3I", "3G", "3B", "3C", "3A", "3F", "3L", "3K"],
383:["3C", "3J", "3B", "3F", "3A", "3G", "3L", "3I"],
384:["3C", "3J", "3B", "3F", "3A", "3G", "3I", "3K"],
385:["3H", "3G", "3B", "3C", "3A", "3F", "3L", "3K"],
386:["3H", "3G", "3B", "3C", "3A", "3F", "3L", "3J"],
387:["3H", "3G", "3B", "3C", "3A", "3F", "3J", "3K"],
388:["3H", "3G", "3B", "3C", "3A", "3F", "3L", "3I"],
389:["3H", "3G", "3B", "3C", "3A", "3F", "3I", "3K"],
390:["3H", "3G", "3B", "3C", "3A", "3F", "3I", "3J"],
391:["3E", "3J", "3B", "3A", "3I", "3C", "3L", "3K"],
392:["3E", "3J", "3B", "3C", "3A", "3H", "3L", "3K"],
393:["3E", "3I", "3B", "3C", "3A", "3H", "3L", "3K"],
394:["3E", "3J", "3B", "3C", "3A", "3H", "3L", "3I"],
395:["3E", "3J", "3B", "3C", "3A", "3H", "3I", "3K"],
396:["3E", "3J", "3B", "3C", "3A", "3G", "3L", "3K"],
397:["3E", "3G", "3B", "3A", "3I", "3C", "3L", "3K"],
398:["3E", "3J", "3B", "3C", "3A", "3G", "3L", "3I"],
399:["3E", "3J", "3B", "3C", "3A", "3G", "3I", "3K"],
400:["3E", "3G", "3B", "3C", "3A", "3H", "3L", "3K"],
401:["3H", "3J", "3B", "3C", "3A", "3G", "3L", "3E"],
402:["3H", "3J", "3B", "3C", "3A", "3G", "3E", "3K"],
403:["3E", "3G", "3B", "3C", "3A", "3H", "3L", "3I"],
404:["3E", "3G", "3B", "3C", "3A", "3H", "3I", "3K"],
405:["3H", "3J", "3B", "3C", "3A", "3G", "3E", "3I"],
406:["3E", "3J", "3B", "3C", "3A", "3F", "3L", "3K"],
407:["3E", "3I", "3B", "3C", "3A", "3F", "3L", "3K"],
408:["3E", "3J", "3B", "3C", "3A", "3F", "3L", "3I"],
409:["3E", "3J", "3B", "3C", "3A", "3F", "3I", "3K"],
410:["3H", "3E", "3B", "3C", "3A", "3F", "3L", "3K"],
411:["3H", "3J", "3B", "3C", "3A", "3F", "3L", "3E"],
412:["3H", "3J", "3B", "3C", "3A", "3F", "3E", "3K"],
413:["3H", "3E", "3B", "3C", "3A", "3F", "3L", "3I"],
414:["3H", "3E", "3B", "3C", "3A", "3F", "3I", "3K"],
415:["3H", "3J", "3B", "3C", "3A", "3F", "3E", "3I"],
416:["3E", "3G", "3B", "3C", "3A", "3F", "3L", "3K"],
417:["3E", "3G", "3B", "3C", "3A", "3F", "3L", "3J"],
418:["3E", "3G", "3B", "3C", "3A", "3F", "3J", "3K"],
419:["3E", "3G", "3B", "3C", "3A", "3F", "3L", "3I"],
420:["3E", "3G", "3B", "3C", "3A", "3F", "3I", "3K"],
421:["3E", "3G", "3B", "3C", "3A", "3F", "3I", "3J"],
422:["3H", "3G", "3B", "3C", "3A", "3F", "3L", "3E"],
423:["3H", "3G", "3B", "3C", "3A", "3F", "3E", "3K"],
424:["3H", "3G", "3B", "3C", "3A", "3F", "3E", "3J"],
425:["3H", "3G", "3B", "3C", "3A", "3F", "3E", "3I"],
426:["3I", "3J", "3B", "3C", "3A", "3D", "3L", "3K"],
427:["3H", "3J", "3B", "3C", "3A", "3D", "3L", "3K"],
428:["3H", "3I", "3B", "3C", "3A", "3D", "3L", "3K"],
429:["3H", "3J", "3B", "3C", "3A", "3D", "3L", "3I"],
430:["3H", "3J", "3B", "3C", "3A", "3D", "3I", "3K"],
431:["3C", "3J", "3B", "3D", "3A", "3G", "3L", "3K"],
432:["3I", "3G", "3B", "3C", "3A", "3D", "3L", "3K"],
433:["3C", "3J", "3B", "3D", "3A", "3G", "3L", "3I"],
434:["3C", "3J", "3B", "3D", "3A", "3G", "3I", "3K"],
435:["3H", "3G", "3B", "3C", "3A", "3D", "3L", "3K"],
436:["3H", "3G", "3B", "3C", "3A", "3D", "3L", "3J"],
437:["3H", "3G", "3B", "3C", "3A", "3D", "3J", "3K"],
438:["3H", "3G", "3B", "3C", "3A", "3D", "3L", "3I"],
439:["3H", "3G", "3B", "3C", "3A", "3D", "3I", "3K"],
440:["3H", "3G", "3B", "3C", "3A", "3D", "3I", "3J"],
441:["3C", "3J", "3B", "3D", "3A", "3F", "3L", "3K"],
442:["3C", "3I", "3B", "3D", "3A", "3F", "3L", "3K"],
443:["3C", "3J", "3B", "3D", "3A", "3F", "3L", "3I"],
444:["3C", "3J", "3B", "3D", "3A", "3F", "3I", "3K"],
445:["3H", "3F", "3B", "3C", "3A", "3D", "3L", "3K"],
446:["3C", "3J", "3B", "3D", "3A", "3F", "3L", "3H"],
447:["3H", "3J", "3B", "3C", "3A", "3F", "3D", "3K"],
448:["3H", "3F", "3B", "3C", "3A", "3D", "3L", "3I"],
449:["3H", "3F", "3B", "3C", "3A", "3D", "3I", "3K"],
450:["3H", "3J", "3B", "3C", "3A", "3F", "3D", "3I"],
451:["3C", "3G", "3B", "3D", "3A", "3F", "3L", "3K"],
452:["3C", "3G", "3B", "3D", "3A", "3F", "3L", "3J"],
453:["3C", "3G", "3B", "3D", "3A", "3F", "3J", "3K"],
454:["3C", "3G", "3B", "3D", "3A", "3F", "3L", "3I"],
455:["3C", "3G", "3B", "3D", "3A", "3F", "3I", "3K"],
456:["3C", "3G", "3B", "3D", "3A", "3F", "3I", "3J"],
457:["3C", "3G", "3B", "3D", "3A", "3F", "3L", "3H"],
458:["3H", "3G", "3B", "3C", "3A", "3F", "3D", "3K"],
459:["3H", "3G", "3B", "3C", "3A", "3F", "3D", "3J"],
460:["3H", "3G", "3B", "3C", "3A", "3F", "3D", "3I"],
461:["3E", "3J", "3B", "3C", "3A", "3D", "3L", "3K"],
462:["3E", "3I", "3B", "3C", "3A", "3D", "3L", "3K"],
463:["3E", "3J", "3B", "3C", "3A", "3D", "3L", "3I"],
464:["3E", "3J", "3B", "3C", "3A", "3D", "3I", "3K"],
465:["3H", "3E", "3B", "3C", "3A", "3D", "3L", "3K"],
466:["3H", "3J", "3B", "3C", "3A", "3D", "3L", "3E"],
467:["3H", "3J", "3B", "3C", "3A", "3D", "3E", "3K"],
468:["3H", "3E", "3B", "3C", "3A", "3D", "3L", "3I"],
469:["3H", "3E", "3B", "3C", "3A", "3D", "3I", "3K"],
470:["3H", "3J", "3B", "3C", "3A", "3D", "3E", "3I"],
471:["3E", "3G", "3B", "3C", "3A", "3D", "3L", "3K"],
472:["3E", "3G", "3B", "3C", "3A", "3D", "3L", "3J"],
473:["3E", "3G", "3B", "3C", "3A", "3D", "3J", "3K"],
474:["3E", "3G", "3B", "3C", "3A", "3D", "3L", "3I"],
475:["3E", "3G", "3B", "3C", "3A", "3D", "3I", "3K"],
476:["3E", "3G", "3B", "3C", "3A", "3D", "3I", "3J"],
477:["3H", "3G", "3B", "3C", "3A", "3D", "3L", "3E"],
478:["3H", "3G", "3B", "3C", "3A", "3D", "3E", "3K"],
479:["3H", "3G", "3B", "3C", "3A", "3D", "3E", "3J"],
480:["3H", "3G", "3B", "3C", "3A", "3D", "3E", "3I"],
481:["3C", "3E", "3B", "3D", "3A", "3F", "3L", "3K"],
482:["3C", "3J", "3B", "3D", "3A", "3F", "3L", "3E"],
483:["3C", "3J", "3B", "3D", "3A", "3F", "3E", "3K"],
484:["3C", "3E", "3B", "3D", "3A", "3F", "3L", "3I"],
485:["3C", "3E", "3B", "3D", "3A", "3F", "3I", "3K"],
486:["3C", "3J", "3B", "3D", "3A", "3F", "3E", "3I"],
487:["3H", "3F", "3B", "3C", "3A", "3D", "3L", "3E"],
488:["3H", "3E", "3B", "3C", "3A", "3F", "3D", "3K"],
489:["3H", "3J", "3B", "3C", "3A", "3F", "3D", "3E"],
490:["3H", "3E", "3B", "3C", "3A", "3F", "3D", "3I"],
491:["3C", "3G", "3B", "3D", "3A", "3F", "3L", "3E"],
492:["3C", "3G", "3B", "3D", "3A", "3F", "3E", "3K"],
493:["3C", "3G", "3B", "3D", "3A", "3F", "3E", "3J"],
494:["3C", "3G", "3B", "3D", "3A", "3F", "3E", "3I"],
495:["3H", "3G", "3B", "3C", "3A", "3F", "3D", "3E"]
};

var A = ["1A", "2A", "3A", "4A"];
var B = ["1B", "2B", "3B", "4B"];
var C = ["1C", "2C", "3C", "4C"];
var D = ["1D", "2D", "3D", "4D"];
var E = ["1E", "2E", "3E", "4E"];
var F = ["1F", "2F", "3F", "4F"];
var G = ["1G", "2G", "3G", "4G"];
var H = ["1H", "2H", "3H", "4H"];
var I = ["1I", "2I", "3I", "4I"];
var J = ["1J", "2J", "3J", "4J"];
var K = ["1K", "2K", "3K", "4K"];
var L = ["1L", "2L", "3L", "4L"];

export const objetoPaises = {
  A: ["Mexico", "Sudafrica", "Corea del sur", "Rep. Checa"],
  B: ["Canada", "Bosn y Herz", "Catar", "Suiza"],
  C: ["Brasil", "Marruecos", "Haiti", "Escocia"],
  D: ["EEUU", "Paraguay", "Australia", "Turquia"],
  E: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"],
  F: ["Paises Bajos", "Japon", "Suecia", "Tunez"],
  G: ["Belgica", "Egipto", "Iran", "Nueva Zelanda"],
  H: ["España", "Cabo Verde", "Arabia Saudita", "Uruguay"],
  I: ["Francia", "Senegal", "Irak", "Noruega"],
  J: ["Argentina", "Argelia", "Austria", "Jordania"],
  K: ["Portugal", "Congo", "Uzbekistan", "Colombia"],
  L: ["Inglaterra", "Croacia", "Ghana", "Panama"]
};

export var porcentajeDieciseisavos = 0;
export var porcentajeOctavos = 0;
export var porcentajeCuartos = 0;
export var porcentajeSemis = 0;
export var porcentajeFinal = 0;
export var porcentajeTotal = 0;

export const primero = '#00b300';
export const segundo = '#73e600';
export const tercero = '#e6b800';
export const todos = 'black';
export const noSeleccionado = '#0039e6';

export var booleanSieteTres = false;
export var booleanSieteCuatro = false;
export var booleanSieteCinco = false;
export var booleanSieteSeis = false;
export var booleanSieteSiete = false;
export var booleanSieteOcho = false;
export var booleanSieteNueve = false;
export var booleanOcho = false;
export var booleanOchoUno = false;
export var booleanOchoDos = false;
export var booleanOchoTres = false;
export var booleanOchoCuatro = false;
export var booleanOchoCinco = false;
export var booleanOchoSeis = false;
export var booleanOchoSiete = false;
export var booleanOchoOcho = false;
export var booleanOchoNueve = false;
export var booleanNueve = false;
export var booleanNueveUno = false;
export var booleanNueveDos = false;
export var booleanNueveTres = false;
export var booleanNueveCuatro = false;
export var booleanNueveCinco = false;
export var booleanNueveSeis = false;
export var booleanNueveSiete = false;
export var booleanNueveOcho = false;
export var booleanNueveNueve = false;
export var booleanCien = false;
export var booleanCienUno = false;
export var booleanCienDos = false;
export var booleanCienCuatro = false;


//Hay un momento en el que cuando el primer pais esta en amarillo y el segundo en cualquier color en el mismo grupo, las chances de crusarse dan 0

export const calcularProbabilidad = (seleccionUno, seleccionDos, pesoUno, pesoDos) =>{

  //El tema de los grupos lo podria modificar en un futuro porque literalmente estoy seleccionando los equipos
  var grupoUno;
  var grupoDos;
  var contadorDieciseisavos = 0;
  var contadorOctavos = 0;
  var contadorCuartos = 0;
  var contadorSemis = 0;
  var contadorFinal = 0;
  var cantidadPosibilidades = 7920;
  // Antes estaba el numero 4455 que seria la cantidad de cruces sin contar las veces que las selecciones elegidas quedan cuartas, 7920 serian absolutamente todas las combinaciones posibles entre estas dos selecciones

  booleanSieteTres = false;
  booleanSieteCuatro = false;
  booleanSieteCinco = false;
  booleanSieteSeis = false;
  booleanSieteSiete = false;
  booleanSieteOcho = false;
  booleanSieteNueve = false;
  booleanOcho = false;
  booleanOchoUno = false;
  booleanOchoDos = false;
  booleanOchoTres = false;
  booleanOchoCuatro = false;
  booleanOchoCinco = false;
  booleanOchoSeis = false;
  booleanOchoSiete = false;
  booleanOchoOcho = false;
  booleanOchoNueve = false;
  booleanNueve = false;
  booleanNueveUno = false;
  booleanNueveDos = false;
  booleanNueveTres = false;
  booleanNueveCuatro = false;
  booleanNueveCinco = false;
  booleanNueveSeis = false;
  booleanNueveSiete = false;
  booleanNueveOcho = false;
  booleanNueveNueve = false;
  booleanCien = false;
  booleanCienUno = false;
  booleanCienDos = false;
  booleanCienCuatro = false;

  //Tendria que sacar el tema de los grupos de aca tambien porque los estoy seleccionando cuando los toco
  for(const x of Object.entries(objetoPaises))
  {
    if(x[1].includes(seleccionUno) && x[1].includes(seleccionDos))
    {
      grupoUno = x[0];
      grupoDos = x[0];
    }
    else if(x[1].includes(seleccionUno))
    {
      grupoUno = x[0];
    }
    else if(x[1].includes(seleccionDos))
    {
      grupoDos = x[0];
    }
  }

  var arrayGrupos = [[[`1${grupoUno}`, `2${grupoUno}`, seleccionUno, `4${grupoUno}`], [seleccionDos, `2${grupoDos}`, `3${grupoDos}`, `4${grupoDos}`]],
      [[`1${grupoUno}`, seleccionUno, `3${grupoUno}`, `4${grupoUno}`], [seleccionDos, `2${grupoDos}`, `3${grupoDos}`, `4${grupoDos}`]],
      [[seleccionUno, `2${grupoUno}`, `3${grupoUno}`, `4${grupoUno}`], [seleccionDos, `2${grupoDos}`, `3${grupoDos}`, `4${grupoDos}`]],
      [[`1${grupoUno}`, `2${grupoUno}`, seleccionUno, `4${grupoUno}`], [`1${grupoDos}`, seleccionDos, `3${grupoDos}`, `4${grupoDos}`]],
      [[`1${grupoUno}`, seleccionUno, `3${grupoUno}`, `4${grupoUno}`], [`1${grupoDos}`, seleccionDos, `3${grupoDos}`, `4${grupoDos}`]],
      [[seleccionUno, `2${grupoUno}`, `3${grupoUno}`, `4${grupoUno}`], [`1${grupoDos}`, seleccionDos, `3${grupoDos}`, `4${grupoDos}`]],
      [[`1${grupoUno}`, `2${grupoUno}`, seleccionUno, `4${grupoUno}`], [`1${grupoDos}`, `2${grupoDos}`, seleccionDos, `4${grupoDos}`]],
      [[`1${grupoUno}`, seleccionUno, `3${grupoUno}`, `4${grupoUno}`], [`1${grupoDos}`, `2${grupoDos}`, seleccionDos, `4${grupoDos}`]],
      [[seleccionUno, `2${grupoUno}`, `3${grupoUno}`, `4${grupoUno}`], [`1${grupoDos}`, `2${grupoDos}`, seleccionDos, `4${grupoDos}`]]];


  if(pesoUno !== -1 && pesoDos !== -1 && grupoUno !== grupoDos)
  {
    cantidadPosibilidades = 495;
    arrayGrupos = arrayGrupos.filter(x=>(x[0][pesoUno] === seleccionUno && x[1][pesoDos] === seleccionDos));
  }
  else if(pesoUno !== -1 && grupoUno !== grupoDos)
  {
    cantidadPosibilidades = 1980;
    arrayGrupos = arrayGrupos.filter(x=>x[0][pesoUno] === seleccionUno);
  }
  else if(pesoDos !== -1 && grupoUno !== grupoDos)
  {
    cantidadPosibilidades = 1980;
    arrayGrupos = arrayGrupos.filter(x=>x[1][pesoDos] === seleccionDos);
  }
  else if(grupoUno === grupoDos)
  {
    cantidadPosibilidades = 2970;
    // Aca se cambian las posibilidades porque son 6 las posibles combinaciones
    arrayGrupos = [[[seleccionUno, seleccionDos, `3${grupoUno}`, `4${grupoUno}`],[seleccionUno, seleccionDos, `3${grupoUno}`, `4${grupoUno}`]],
        [[seleccionUno, `2${grupoUno}`, seleccionDos, `4${grupoUno}`], [seleccionUno, `2${grupoUno}`, seleccionDos, `4${grupoUno}`]],
        [[`1${grupoUno}`, seleccionUno, seleccionDos, `4${grupoUno}`], [`1${grupoUno}`, seleccionUno, seleccionDos, `4${grupoUno}`]],
        [[seleccionDos, seleccionUno,`3${grupoUno}` , `4${grupoUno}`], [seleccionDos, seleccionUno, `3${grupoUno}`, `4${grupoUno}`]],
        [[seleccionDos, `2${grupoUno}`,seleccionUno , `4${grupoUno}`], [seleccionDos, `2${grupoUno}`, seleccionUno, `4${grupoUno}`]],
        [[`1${grupoUno}`, seleccionDos,seleccionUno , `4${grupoUno}`], [`1${grupoUno}`, seleccionDos, seleccionUno, `4${grupoUno}`]]];
    
    if(pesoUno === -1 && pesoDos === -1)
    {
      arrayGrupos = arrayGrupos.filter(x=>(x[0].indexOf(seleccionUno) !== x[1].indexOf(seleccionDos) && (x[0][2] !== seleccionUno) && (x[1][0] !== seleccionDos)))
    }
    else if(pesoUno !== -1 && pesoDos !== -1)
    {
      cantidadPosibilidades = 495;
      arrayGrupos = arrayGrupos.filter(x=>(x[0][pesoUno] === seleccionUno && x[1][pesoDos] === seleccionDos));
    }
    else if(pesoUno !== -1)
    {
      cantidadPosibilidades = 1485;
      arrayGrupos = arrayGrupos.filter(x=>(x[0][pesoUno] === seleccionUno && x[1][pesoUno] !== seleccionDos));
    }
    else if(pesoDos !== -1)
    {
      cantidadPosibilidades = 1485;
      arrayGrupos = arrayGrupos.filter(x=>(x[1][pesoDos] === seleccionDos && x[0][pesoDos] !== seleccionUno));
    }
  }

  for(const grupos of arrayGrupos)
  {
    switch(grupoUno)
    {
      case "A":
        A = grupos[0];
        break;
      case "B":
        B = grupos[0];
        break;
      case "C":
        C = grupos[0];
        break;
      case "D":
        D = grupos[0];
        break;
      case "E":
        E = grupos[0];
        break;
      case "F":
        F = grupos[0];
        break;
      case "G":
        G = grupos[0];
        break;
      case "H":
        H = grupos[0];
        break;
      case "I":
        I = grupos[0];
        break;
      case "J":
        J = grupos[0];
        break;
      case "K":
        K = grupos[0];
        break;
      case "L":
        L = grupos[0];
        break;
        default:
    }
    
    switch(grupoDos)
    {
      case "A":
        A = grupos[1];
        break;
      case "B":
        B = grupos[1];
        break;
      case "C":
        C = grupos[1];
        break;
      case "D":
        D = grupos[1];
        break;
      case "E":
        E = grupos[1];
        break;
      case "F":
        F = grupos[1];
        break;
      case "G":
        G = grupos[1];
        break;
      case "H":
        H = grupos[1];
        break;
      case "I":
        I = grupos[1];
        break;
      case "J":
        J = grupos[1];
        break;
      case "K":
        K = grupos[1];
        break;
      case "L":
        L = grupos[1];
        break;
      default:
    }
      
    for(const comb of Object.values(combinaciones))
    {
      var seguirEjecucion = true;
      var terceroSieteCuatro = comb[3];
      var terceroSieteSiete = comb[5];
      var terceroOchoUno = comb[2];
      var terceroOchoDos = comb[4];
      var terceroSieteNueve = comb[0];
      var terceroOcho = comb[7];
      var terceroOchoCinco = comb[1];
      var terceroOchoSiete = comb[6];
      
      if(grupos[1][2] === seleccionDos)
      {
        // Tercero 74
        if(comb[3].includes(`3${grupoDos}`))
        {
          terceroSieteCuatro = seleccionDos;
        }
        
        // Tercero 77
        if(comb[5].includes(`3${grupoDos}`))
        {
          terceroSieteSiete = seleccionDos;
        }
        
        // Tercero 81
        if(comb[2].includes(`3${grupoDos}`))
        {
          terceroOchoUno = seleccionDos;
        }
        
        // Tercero 82
        if(comb[4].includes(`3${grupoDos}`))
        {
          terceroOchoDos = seleccionDos;
        }
        
        // Tercero 79
        if(comb[0].includes(`3${grupoDos}`))
        {
          terceroSieteNueve = seleccionDos;
        }
        
        // Tercero 80
        if(comb[7].includes(`3${grupoDos}`))
        {
          terceroOcho = seleccionDos;
        }
        
        // Tercero 85
        if(comb[1].includes(`3${grupoDos}`))
        {
          terceroOchoCinco = seleccionDos;
        }
        
        // Tercero 87
        if(comb[6].includes(`3${grupoDos}`))
        {
          terceroOchoSiete = seleccionDos;
        }
      }
      
      if(grupos[0][2] === seleccionUno)
      {
        // Tercero 74
        if(comb[3].includes(`3${grupoUno}`))
        {
          terceroSieteCuatro = seleccionUno;
        }
        
        // Tercero 77
        if(comb[5].includes(`3${grupoUno}`))
        {
          terceroSieteSiete = seleccionUno;
        }
        
        // Tercero 81
        if(comb[2].includes(`3${grupoUno}`))
        {
          terceroOchoUno = seleccionUno;
        }
        
        // Tercero 82
        if(comb[4].includes(`3${grupoUno}`))
        {
          terceroOchoDos = seleccionUno;
        }
        
        // Tercero 79
        if(comb[0].includes(`3${grupoUno}`))
        {
          terceroSieteNueve = seleccionUno;
        }
        
        // Tercero 80
        if(comb[7].includes(`3${grupoUno}`))
        {
          terceroOcho = seleccionUno;
        }
        
        // Tercero 85
        if(comb[1].includes(`3${grupoUno}`))
        {
          terceroOchoCinco = seleccionUno;
        }
        
        // Tercero 87
        if(comb[6].includes(`3${grupoUno}`))
        {
          terceroOchoSiete = seleccionUno;
        }
      }
    
      // Dieciseisavos
      var sieteCuatro = [E[0], terceroSieteCuatro];
      var sieteSiete = [I[0], terceroSieteSiete];

      var sieteTres = [A[1], B[1]];
      var sieteCinco = [F[0], C[1]];

      var ochoTres = [K[1], L[1]];
      var ochoCuatro = [H[0], J[1]];

      var ochoUno = [D[0], terceroOchoUno];
      var ochoDos = [G[0], terceroOchoDos];

      var sieteSeis = [C[0], F[1]];
      var sieteOcho = [E[1], I[1]];

      var sieteNueve = [A[0], terceroSieteNueve];
      var ocho = [L[0], terceroOcho];

      var ochoSeis = [J[0], H[1]];
      var ochoOcho = [D[1], G[1]];

      var ochoCinco = [B[0], terceroOchoCinco];
      var ochoSiete = [K[0], terceroOchoSiete];
          
      // 74
      if(sieteCuatro.includes(seleccionUno) && sieteCuatro.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanSieteCuatro = true;
        seguirEjecucion = false;
      }
      
      //77
      if(sieteSiete.includes(seleccionUno) && sieteSiete.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanSieteSiete = true;
        seguirEjecucion = false;
      }
      
      //73
      if(sieteTres.includes(seleccionUno) && sieteTres.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanSieteTres = true;
        seguirEjecucion = false;
      }
      
      //75
      if(sieteCinco.includes(seleccionUno) && sieteCinco.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanSieteCinco = true;
        seguirEjecucion = false;
      }
      
      //83
      if(ochoTres.includes(seleccionUno) && ochoTres.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOchoTres = true;
        seguirEjecucion = false;
      }
      
      //84
      if(ochoCuatro.includes(seleccionUno) && ochoCuatro.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOchoCuatro = true;
        seguirEjecucion = false;
      }
      
      //81
      if(ochoUno.includes(seleccionUno) && ochoUno.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOchoUno = true;
        seguirEjecucion = false;
      }
      
      //82
      if(ochoDos.includes(seleccionUno) && ochoDos.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOchoDos = true;
        seguirEjecucion = false;
      }
      
      //76
      if(sieteSeis.includes(seleccionUno) && sieteSeis.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanSieteSeis = true;
        seguirEjecucion = false;
      }
      
      //78
      if(sieteOcho.includes(seleccionUno) && sieteOcho.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanSieteOcho = true;
        seguirEjecucion = false;
      }
      
      //79
      if(sieteNueve.includes(seleccionUno) && sieteNueve.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanSieteNueve = true;
        seguirEjecucion = false;
      }
      
      //80
      if(ocho.includes(seleccionUno) && ocho.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOcho = true;
        seguirEjecucion = false;
      }
      
      //86
      if(ochoSeis.includes(seleccionUno) && ochoSeis.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOchoSeis = true;
        seguirEjecucion = false;
      }
      
      //88
      if(ochoOcho.includes(seleccionUno) && ochoOcho.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOchoOcho = true;
        seguirEjecucion = false;
      }
      
      //85
      if(ochoCinco.includes(seleccionUno) && ochoCinco.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOchoCinco = true;
        seguirEjecucion = false;
      }
      
      //87
      if(ochoSiete.includes(seleccionUno) && ochoSiete.includes(seleccionDos))
      {
        contadorDieciseisavos++;
        booleanOchoSiete = true;
        seguirEjecucion = false;
      }
      
      if(seguirEjecucion)
      {
        var resultadoSieteCuatro = sieteCuatro[0];
        var resultadoSieteSiete = sieteSiete[0];
        var resultadoSieteTres = sieteTres[0];
        var resultadoSieteCinco = sieteCinco[0];
        var resultadoOchoTres = ochoTres[0];
        var resultadoOchoCuatro = ochoCuatro[0];
        var resultadoOchoUno = ochoUno[0];
        var resultadoOchoDos = ochoDos[0];
        var resultadoSieteSeis = sieteSeis[0];
        var resultadoSieteOcho = sieteOcho[0];
        var resultadoSieteNueve = sieteNueve[0];
        var resultadoOcho = ocho[0];
        var resultadoOchoSeis = ochoSeis[0];
        var resultadoOchoOcho = ochoOcho[0];
        var resultadoOchoCinco = ochoCinco[0];
        var resultadoOchoSiete = ochoSiete[0];
        
        //74
        if(sieteCuatro.includes(seleccionUno))
        {
          resultadoSieteCuatro = seleccionUno;
        }
        else if(sieteCuatro.includes(seleccionDos))
        {
          resultadoSieteCuatro = seleccionDos;
        }
        
        //77
        if(sieteSiete.includes(seleccionUno))
        {
          resultadoSieteSiete = seleccionUno;
        }
        else if(sieteSiete.includes(seleccionDos))
        {
          resultadoSieteSiete = seleccionDos;
        }
        
        //73
        if(sieteTres.includes(seleccionUno))
        {
          resultadoSieteTres = seleccionUno;
        }
        else if(sieteTres.includes(seleccionDos))
        {
          resultadoSieteTres = seleccionDos;
        }
        
        //75
        if(sieteCinco.includes(seleccionUno))
        {
          resultadoSieteCinco = seleccionUno;
        }
        else if(sieteCinco.includes(seleccionDos))
        {
          resultadoSieteCinco = seleccionDos;
        }
        
        //83
        if(ochoTres.includes(seleccionUno))
        {
          resultadoOchoTres = seleccionUno;
        }
        else if(ochoTres.includes(seleccionDos))
        {
          resultadoOchoTres = seleccionDos;
        }
        
        //84
        if(ochoCuatro.includes(seleccionUno))
        {
          resultadoOchoCuatro = seleccionUno;
        }
        else if(ochoCuatro.includes(seleccionDos))
        {
          resultadoOchoCuatro = seleccionDos;
        }
        
        //81
        if(ochoUno.includes(seleccionUno))
        {
          resultadoOchoUno = seleccionUno;
        }
        else if(ochoUno.includes(seleccionDos))
        {
          resultadoOchoUno = seleccionDos;
        }
        
        //82
        if(ochoDos.includes(seleccionUno))
        {
          resultadoOchoDos = seleccionUno;
        }
        else if(ochoDos.includes(seleccionDos))
        {
          resultadoOchoDos = seleccionDos;
        }
        
        //76
        if(sieteSeis.includes(seleccionUno))
        {
          resultadoSieteSeis = seleccionUno;
        }
        else if(sieteSeis.includes(seleccionDos))
        {
          resultadoSieteSeis = seleccionDos;
        }
        
        //78
        if(sieteOcho.includes(seleccionUno))
        {
          resultadoSieteOcho = seleccionUno;
        }
        else if(sieteOcho.includes(seleccionDos))
        {
          resultadoSieteOcho = seleccionDos;
        }
        
        //79
        if(sieteNueve.includes(seleccionUno))
        {
          resultadoSieteNueve = seleccionUno;
        }
        else if(sieteNueve.includes(seleccionDos))
        {
          resultadoSieteNueve = seleccionDos;
        }
        
        //80
        if(ocho.includes(seleccionUno))
        {
          resultadoOcho = seleccionUno;
        }
        else if(ocho.includes(seleccionDos))
        {
          resultadoOcho = seleccionDos;
        }
        
        //86
        if(ochoSeis.includes(seleccionUno))
        {
          resultadoOchoSeis = seleccionUno;
        }
        else if(ochoSeis.includes(seleccionDos))
        {
          resultadoOchoSeis = seleccionDos;
        }
        
        //88
        if(ochoOcho.includes(seleccionUno))
        {
          resultadoOchoOcho = seleccionUno;
        }
        else if(ochoOcho.includes(seleccionDos))
        {
          resultadoOchoOcho = seleccionDos;
        }
        
        //85
        if(ochoCinco.includes(seleccionUno))
        {
          resultadoOchoCinco = seleccionUno;
        }
        else if(ochoCinco.includes(seleccionDos))
        {
          resultadoOchoCinco = seleccionDos;
        }
        
        //87
        if(ochoSiete.includes(seleccionUno))
        {
          resultadoOchoSiete = seleccionUno;
        }
        else if(ochoSiete.includes(seleccionDos))
        {
          resultadoOchoSiete = seleccionDos;
        }
        
        // Octavos
        var ochoNueve = [resultadoSieteCuatro, resultadoSieteSiete];
        var nueve = [resultadoSieteTres, resultadoSieteCinco];
        
        var nueveTres = [resultadoOchoTres, resultadoOchoCuatro];
        var nueveCuatro = [resultadoOchoUno, resultadoOchoDos];
        
        var nueveUno = [resultadoSieteSeis, resultadoSieteOcho];
        var nueveDos = [resultadoSieteNueve, resultadoOcho];
        
        var nueveCinco = [resultadoOchoSeis, resultadoOchoOcho];
        var nueveSeis = [resultadoOchoCinco, resultadoOchoSiete];
        
        //89
        if(ochoNueve.includes(seleccionUno) && ochoNueve.includes(seleccionDos))
        {
          contadorOctavos++;
          booleanOchoNueve = true;
          seguirEjecucion = false;
        }
        
        //90
        if(nueve.includes(seleccionUno) && nueve.includes(seleccionDos))
        {
          contadorOctavos++;
          booleanNueve = true;
          seguirEjecucion = false;
        }
        
        //93
        if(nueveTres.includes(seleccionUno) && nueveTres.includes(seleccionDos))
        {
          contadorOctavos++;
          booleanNueveTres = true;
          seguirEjecucion = false;
        }
        
        //94
        if(nueveCuatro.includes(seleccionUno) && nueveCuatro.includes(seleccionDos))
        {
          contadorOctavos++;
          booleanNueveCuatro = true;
          seguirEjecucion = false;
        }
        
        //91
        if(nueveUno.includes(seleccionUno) && nueveUno.includes(seleccionDos))
        {
          contadorOctavos++;
          booleanNueveUno = true;
          seguirEjecucion = false;
        }
        
        //92
        if(nueveDos.includes(seleccionUno) && nueveDos.includes(seleccionDos))
        {
          contadorOctavos++;
          booleanNueveDos = true;
          seguirEjecucion = false;
        }
        
        //95
        if(nueveCinco.includes(seleccionUno) && nueveCinco.includes(seleccionDos))
        {
          contadorOctavos++;
          booleanNueveCinco = true;
          seguirEjecucion = false;
        }
        
        //96
        if(nueveSeis.includes(seleccionUno) && nueveSeis.includes(seleccionDos))
        {
          contadorOctavos++;
          booleanNueveSeis = true;
          seguirEjecucion = false;
        }
        
        if(seguirEjecucion)
        {
          var resultadoOchoNueve = ochoNueve[0];
          var resultadoNueve = nueve[0];
          var resultadoNueveTres = nueveTres[0];
          var resultadoNueveCuatro = nueveCuatro[0];
          var resultadoNueveUno = nueveUno[0];
          var resultadoNueveDos = nueveDos[0];
          var resultadoNueveCinco = nueveCinco[0];
          var resultadoNueveSeis = nueveSeis[0];
        
          //89
          if(ochoNueve.includes(seleccionUno))
          {
            resultadoOchoNueve = seleccionUno;
          }
          else if(ochoNueve.includes(seleccionDos))
          {
            resultadoOchoNueve = seleccionDos;
          }
          
          //90
          if(nueve.includes(seleccionUno))
          {
            resultadoNueve = seleccionUno;
          }
          else if(nueve.includes(seleccionDos))
          {
            resultadoNueve = seleccionDos;
          }
          
          //93
          if(nueveTres.includes(seleccionUno))
          {
            resultadoNueveTres = seleccionUno;
          }
          else if(nueveTres.includes(seleccionDos))
          {
            resultadoNueveTres = seleccionDos;
          }
          
          //94
          if(nueveCuatro.includes(seleccionUno))
          {
            resultadoNueveCuatro = seleccionUno;
          }
          else if(nueveCuatro.includes(seleccionDos))
          {
            resultadoNueveCuatro = seleccionDos;
          }
          
          //91
          if(nueveUno.includes(seleccionUno))
          {
            resultadoNueveUno = seleccionUno;
          }
          else if(nueveUno.includes(seleccionDos))
          {
            resultadoNueveUno = seleccionDos;
          }
          
          //92
          if(nueveDos.includes(seleccionUno))
          {
            resultadoNueveDos = seleccionUno;
          }
          else if(nueveDos.includes(seleccionDos))
          {
            resultadoNueveDos = seleccionDos;
          }
          
          //95
          if(nueveCinco.includes(seleccionUno))
          {
            resultadoNueveCinco = seleccionUno;
          }
          else if(nueveCinco.includes(seleccionDos))
          {
            resultadoNueveCinco = seleccionDos;
          }
          
          //96
          if(nueveSeis.includes(seleccionUno))
          {
            resultadoNueveSeis = seleccionUno;
          }
          else if(nueveSeis.includes(seleccionDos))
          {
            resultadoNueveSeis = seleccionDos;
          }
          
          // Cuartos
          var nueveSiete = [resultadoOchoNueve, resultadoNueve];
          var nueveOcho = [resultadoNueveTres, resultadoNueveCuatro];
          
          var nueveNueve = [resultadoNueveUno, resultadoNueveDos];
          var cien = [resultadoNueveCinco, resultadoNueveSeis];
                  
          //97
          if(nueveSiete.includes(seleccionUno) && nueveSiete.includes(seleccionDos))
          {
            contadorCuartos++;
            booleanNueveSiete = true;
            seguirEjecucion = false;
          }
          
          //98
          if(nueveOcho.includes(seleccionUno) && nueveOcho.includes(seleccionDos))
          {
            contadorCuartos++;
            booleanNueveOcho = true;
            seguirEjecucion = false;
          }
          
          //99
          if(nueveNueve.includes(seleccionUno) && nueveNueve.includes(seleccionDos))
          {
            contadorCuartos++;
            booleanNueveNueve = true;
            seguirEjecucion = false;
          }
          
          //100
          if(cien.includes(seleccionUno) && cien.includes(seleccionDos))
          {
            contadorCuartos++;
            booleanCien = true;
            seguirEjecucion = false;
          }
          
          if(seguirEjecucion)
          {
            var resultadoNueveSiete = nueveSiete[0];
            var resultadoNueveOcho = nueveOcho[0];
            var resultadoNueveNueve = nueveNueve[0];
            var resultadoCien = cien[0];

            //97
            if(nueveSiete.includes(seleccionUno))
            {
              resultadoNueveSiete = seleccionUno;
            }
            else if(nueveSiete.includes(seleccionDos))
            {
              resultadoNueveSiete = seleccionDos;
            }
            
            //98
            if(nueveOcho.includes(seleccionUno))
            {
              resultadoNueveOcho = seleccionUno;
            }
            else if(nueveOcho.includes(seleccionDos))
            {
              resultadoNueveOcho = seleccionDos;
            }

            //99
            if(nueveNueve.includes(seleccionUno))
            {
              resultadoNueveNueve = seleccionUno;
            }
            else if(nueveNueve.includes(seleccionDos))
            {
              resultadoNueveNueve = seleccionDos;
            }
            
            //100
            if(cien.includes(seleccionUno))
            {
              resultadoCien = seleccionUno;
            }
            else if(cien.includes(seleccionDos))
            {
              resultadoCien = seleccionDos;
            }
            
            // Semis
            var cienUno = [resultadoNueveSiete, resultadoNueveOcho];
            var cienDos = [resultadoNueveNueve, resultadoCien];
                      
            //101
            if(cienUno.includes(seleccionUno) && cienUno.includes(seleccionDos))
            {
              contadorSemis++;
              booleanCienUno = true;
              seguirEjecucion = false;
            }
            
            //102
            if(cienDos.includes(seleccionUno) && cienDos.includes(seleccionDos))
            {
              contadorSemis++;
              booleanCienDos = true;
              seguirEjecucion = false;
            }
            
            if(seguirEjecucion)
            {
              var resultadoCienUno = cienUno[0];
              var resultadoCienDos = cienDos[0];

              //101
              if(cienUno.includes(seleccionUno))
              {
                resultadoCienUno = seleccionUno;
              }
              else if(cienUno.includes(seleccionDos))
              {
                resultadoCienUno = seleccionDos;
              }
              
              //102
              if(cienDos.includes(seleccionUno))
              {
                resultadoCienDos = seleccionUno;
              }
              else if(cienDos.includes(seleccionDos))
              {
                resultadoCienDos = seleccionDos;
              }
              //Final
              var cienCuatro = [resultadoCienUno, resultadoCienDos];
              
              //104
              if(cienCuatro.includes(seleccionUno) && cienCuatro.includes(seleccionDos))
              {
                contadorFinal++;
                booleanCienCuatro = true;
              }
            }
          }
        }
      }
    }
    console.log("-------------------------------");
  }

  var contadorCruces = contadorDieciseisavos + contadorOctavos + contadorCuartos + contadorSemis + contadorFinal;

  porcentajeDieciseisavos = (contadorDieciseisavos * 100 / cantidadPosibilidades).toFixed(2);
  porcentajeOctavos = (contadorOctavos * 100 / cantidadPosibilidades).toFixed(2);
  porcentajeCuartos = (contadorCuartos * 100 / cantidadPosibilidades).toFixed(2);
  porcentajeSemis = (contadorSemis * 100 / cantidadPosibilidades).toFixed(2);
  porcentajeFinal = (contadorFinal * 100 / cantidadPosibilidades).toFixed(2);
  porcentajeTotal = (contadorCruces * 100 / cantidadPosibilidades).toFixed(2);

  console.log("Probabilidad de cruces en 16º: " + porcentajeDieciseisavos + "%");
  console.log("Probabilidad de cruces en 8º: " + porcentajeOctavos + "%");
  console.log("Probabilidad de cruces en cuartos: " + porcentajeCuartos + "%");
  console.log("Probabilidad de cruces en semis: " + porcentajeSemis + "%");
  console.log("Probabilidad de cruces en final o tercer puesto: " + porcentajeFinal + "%");
  console.log("Probabilidad de cruces: " + porcentajeTotal + "%");
}