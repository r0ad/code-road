---
title: 为什么从源码学习Spring6？
date: 2024-03-04 9:00
---

源码下面无秘密，这是程序员的口头禅。对于强大而且设计优秀的Spring框架也是这样的，在基础代码层层堆叠之下，Spring成为了一个非常流行的框架。

如何学习Spring框架呢？一个很常用的办法就是通过使用到的api结合源码来分析和理解。api给程序员一个直观的体验，这个api是什么，就有什么功能。当想要理解原理的时候，就可以结合源码来来了解原理和实现方式。

通过SpringFramework6的源码可以看到，Spring包含如下几个模块：

- `spring-aop`：提供了面向切面编程（AOP）的支持，允许在代码中分离横切关注点。
- `spring-aspects`：包含了用于实现 AOP 的AspectJ 集成和 weaving 功能。
- `spring-beans`：是 Spring 框架的核心模块之一，提供了对 JavaBean 的配置和管理。
- `spring-context`：提供了应用程序上下文的管理和配置，包括依赖注入和上下文的生命周期。
- `spring-context-indexer`：用于支持 Spring Context 的索引和搜索功能。
- `spring-context-support`：提供了一些额外的上下文支持，如缓存、事件发布和监听器等。
- `spring-core`：是 Spring 框架的基础模块，包含了一些核心的工具和类。
- `spring-core-test`：是 Spring 核心模块的测试支持。
- `spring-expression`：提供了一种强大的表达式语言，用于在配置文件和注解中解析和操作对象。
- `spring-instrument`：用于在应用程序运行期间动态检测和修改类的行为。
- `spring-jcl`：提供了 JCL（Jakarta Commons Logging）的集成和日志管理。
- `spring-jdbc`：提供了对 JDBC 数据库操作的简化和封装。
- `spring-jms`：用于与 JMS（Java Message Service）消息队列的集成。
- `spring-messaging`：是一个通用的消息传递抽象和实现。
- `spring-orm`：提供了对 ORM（Object Relational Mapping）框架的集成支持。
- `spring-oxm`：是 Spring Object/Relational Mapping（ORM）模块的一部分。
- `spring-r2dbc`：用于与 Reactive Relational Database Connectivity（反应式关系型数据库连接）的支持。
- `spring-test`：提供了用于测试 Spring 应用程序的工具和类。
- `spring-tx`：提供了对事务管理的支持。
- `spring-web`：是 Spring 框架的 Web 模块，提供了 Web 应用程序的开发支持。
- `spring-webflux`：用于构建反应式 Web 应用程序。
- `spring-webmvc`：是传统的 Spring MVC 框架，用于构建 Web 应用程序。
- `spring-websocket`：用于实现 WebSocket 通信。

这些模块基本就是Spring6框架的全部核心了。可以从这些模块入手来学习Spring的功能，但是源码细节却是非常复杂的，随意得挑选几个模块进行学习，以点带面。

## 学习哪些内容？

由浅入深地通过功能学习原理，参考已有的参考资料进行学习。大概可以深入学习 Spring6 框架的这几个模块，包括容器与 Bean、AOP、WEB、Boot 等。其中Boot是Spring的增强版本，具有相同的学习意义。

具体内容如下：

**容器与 Bean:**

- 学习容器接口和容器实现，理解 Bean 的生命周期。
- 了解 Bean 后处理器和 BeanFactory 后处理器的作用。
- 熟悉 Aware 接口、初始化与销毁过程以及 Scope。

**AOP:**

- 研究 AOP 的实现方式，包括 ajc 编译器、agent 类加载和 proxy。
- 深入学习 jdk 动态代理和 cglib 代理的进阶内容。
- 了解 jdk 和 cglib 在 Spring 中的统一使用。
- 掌握切点匹配和从 @Aspect 到 Advisor 的转换。
- 学习静态通知调用和动态通知调用。

**WEB:**

- 探究 RequestMappingHandlerMapping 和 RequestMappingHandlerAdapter 的工作原理。
- 了解参数解析器、参数名解析和对象绑定与类型转换。
- 学习 @ControllerAdvice 中的 @InitBinder、@ModelAttribute、返回值处理器、MessageConverter 等。
- 掌握 @ControllerAdvice 中的 @ResponseBodyAdvice、异常解析器和 @ExceptionHandler。
- 了解 Tomcat 异常处理、BeanNameUrlHandlerMapping、SimpleControllerHandlerAdapter、RouterFunctionMapping、HandlerFunctionAdapter、SimpleUrlHandlerMapping 和 HttpRequestHandlerAdapter 的工作方式。
- 理解 mvc 处理流程。

**Boot:**

- 学习 Boot 骨架项目和 Boot War 项目的构建。
- 了解 Boot 启动过程和 Tomcat 内嵌容器的使用。
- 探索 Boot 自动配置和条件装配底层的原理。

**其他模块：**

- 学习 FactoryBean 的原理和应用。
- 理解 @Indexed 的工作原理。
- 深入研究代理的概念和应用。
- 探索 @Value 装配底层的机制。
- 学习 @Autowired 装配底层的原理。
- 了解事件监听器和事件发布器的使用。

通过学习以上模块，将能够快速掌握其他模块的使用和学习方法，全面理解 Spring6 框架的核心概念和功能。

## 参考资料

### 文档

- Spring 6 javadoc <https://docs.spring.io/spring-framework/docs/6.1.x/javadoc-api/>
- Spring 6 参考文档 <https://docs.spring.io/spring-framework/docs/6.1.x/reference/html/>
- Spring 6 源码 <https://github.com/spring-projects/spring-framework>