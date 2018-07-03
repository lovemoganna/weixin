## margin：外边距；设置对象四边的外延边距。
```text
margin: 20rpx 10rpx 25rpx 10rpx ：如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。

margin：20rpx：如果只提供一个，将用于全部的四边。

margin：20rpx 20rpx：如果提供两个，第一个用于上、下，第二个用于左、右。

margin：20rpx 20rpx 10rpx：如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。

某些相邻的margin会发生合并，称之为margin折叠，具体的现象就如果两个块级元素都设置了margin，那取两者之间的最大值做为两个元素的外边距。

注意：margin折叠常规认知：

margin折叠只发生在块级元素上；

浮动元素的margin不与任何margin发生折叠；

设置了属性overflow且值不为visible的块级元素，将不与它的子元素发生margin折叠；

绝对定位元素的margin不与任何margin发生折叠；

根元素的margin不与其它任何margin发生折叠.

```
## padding：内边距：设置对象四边的内部边距。
```text

padding: 20rpx 10rpx 25rpx 10rpx ：如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
padding：20rpx：如果只提供一个，将用于全部的四边。
padding：20rpx 20rpx：如果提供两个，第一个用于上、下，第二个用于左、右。
padding：20rpx 20rpx 10rpx：如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
```
## margin和padding的相似之处 
```
margin-top，margin-right，margin-bottom，margin-left对应的分别是上右下左外边的距离，可取值：auto／数值／百分比。

padding-top，padding-right，padding-bottom，padding-left对应的分别是上右下左内边的距离，可取值：auto／数值／百分比。
```
